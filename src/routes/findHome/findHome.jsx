import { Await, useLoaderData } from "react-router-dom";
import List from "../../components/list/List";
import "./findHome.scss";
import { Suspense } from "react";
import Filter from "../../components/filter/Filter";
import Chat from "../../components/chat/Chat";

function Findhome() {
  const data = useLoaderData();

  return (
    <div className="profilePage">
    <div className="details">
      <div className="wrapper">
        <Filter />
        <div className="title">
            <h1>My Properties</h1>
          </div>

          <Suspense fallback={<p>Loading properties...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading your posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data?.userPosts || []} />
              )}
            </Await>
          </Suspense>

          <div className="title">
            <h1>Saved Properties</h1>
          </div>

          <Suspense fallback={<p>Loading saved properties...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading saved posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data?.savedPosts || []} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading chats...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) =>
                Array.isArray(chatResponse?.data) ? (
                  <Chat chats={chatResponse.data} />
                ) : (
                  <p>No chats found</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>
        </div>
  );
}

export default Findhome;

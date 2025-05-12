import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import {Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import List from "../../components/list/List";
function ListPage() {
  const data = useLoaderData();

  // Safely access posts and ensure it's an array
  const renderPosts = (postResponse) => {
    if (!postResponse || !Array.isArray(postResponse.data)) {
      return <p>No posts available.</p>;
    }

    return postResponse.data.map((post) => <Card key={post.id} item={post} />);
  };

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading properties...</p>}>
          <Await
  resolve={data.postResponse}
  errorElement={<p>Error loading your posts!</p>}
>
  {(postResponse) => (
    <List posts={Array.isArray(postResponse.data) ? postResponse.data : []} />
  )}
</Await>

          </Suspense>
         
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={<p>Loading map...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading map!</p>}
          >
            {(postResponse) => {
              if (!postResponse || !Array.isArray(data.postResponse)) {
                return <p>No map data available.</p>;
              }
              return <Map items={postResponse.data?.userPosts || []} />;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;

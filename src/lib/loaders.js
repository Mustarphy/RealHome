import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

// For single post details
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

// For list page with optional query filters
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1]; // gets query string
  const postPromise = apiRequest("/posts?" + query);

  return defer({
    postResponse: postPromise,
  });
};

// ✅ Profile page loader with userId passed to backend routes
export const profilePageLoader = async () => {
  try {
    const postPromise = apiRequest("/users/profilePosts");  
    const chatPromise = apiRequest("/chats");

    return defer({
      postResponse: postPromise,
      chatResponse: chatPromise,
    });
  } catch (err) {
    console.error("Loader error:", err);
    return defer({
      postResponse: Promise.reject("User not logged in"),
      chatResponse: Promise.reject("User not logged in"),
    });
  }
};

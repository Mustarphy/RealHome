import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from './routes/newPostPage/newPostPage';
import AboutUs from "./routes/aboutUs/aboutUs";
import ContactUs from './routes/contactUs.jsx/contactus';
import Chat from "./components/chat/Chat";
import Messages from "./routes/Messages/Message";
import Tenantdashboard from "./routes/addProperty/tenantDashboard";
import Tenantprofile from "./routes/tenantprofile/tenantProfile";




import {
  Layout,
  RequireAuth,
  UserLayout,
  TenantLayout,
} from "./routes/layout/layout";

import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
import Findhome from "./routes/findHome/findHome";


const router = createBrowserRouter([
  // Public and shared pages
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/list", element: <ListPage />, loader: listPageLoader },
      { path: "/:id", element: <SinglePage />, loader: singlePageLoader },
      { path: "/messages/:id", element: <Chat /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/profile/update", element: <ProfileUpdatePage /> },
      { path: "/add", element: <NewPostPage /> },
    ],
  },

  // Authenticated user routes
  {
    path: "/",
    element: (
      <RequireAuth role="user">
        <UserLayout />
      </RequireAuth>
    ),
    children: [
      { path: "/profile", element:<Tenantprofile />, loader: profilePageLoader },
      { path: "/find", element:<Findhome />, loader: profilePageLoader },
    ],
  },

  // Authenticated tenant routes
  {
    path: "/tenant",
    element: (
      <RequireAuth role="tenant">
        <TenantLayout />
      </RequireAuth>
    ),
    children: [
      { path: "/tenant/add-property", element: <Tenantdashboard />, loader: profilePageLoader },
      { path: "/tenant/profile", element: <ProfilePage />, loader: profilePageLoader },
      { path: "/tenant/messages", element: <Messages /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

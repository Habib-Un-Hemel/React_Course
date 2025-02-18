import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet> </Outlet>
      <Footer></Footer>
    </div>
  );
};

//confiration for routing
const appRouter = createBrowserRouter([
  {
    //this configuration tells if this is the path then render AppLayout component
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/", element: <Body /> },

      //resId is dynamic value
      { path: "/restaurants/:resID", element: <RestaurantMenu /> },
    ],

    errorElement: <Error />,
  },
]);
//i have created the configuration for routing but i need to provide it to the app

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

//provide the router to the app
root.render(<RouterProvider router={appRouter} />);

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Body

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/",
    element: <AppLayout />,
    errorElement: <Error /> 
  },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

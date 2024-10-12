import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import Root from "./Components/Root";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/products/:productId',
        element:<ProductDetails />
      },
      {
        path:'/products/addNewProduct',
        element:<AddProduct />
      }
      ,
      {
        path:'/products/edit/:productId',
        element:<EditProduct />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

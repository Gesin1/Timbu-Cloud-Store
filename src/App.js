import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Page/HomePage";
import Cart from "./Page/Cart";
import CheckOut from "./Page/CheckOut";
import MainLayout from "./Layout/MainLayout";
import { CartProvider } from "./component/CartContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<CheckOut />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;

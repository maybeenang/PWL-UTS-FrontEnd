import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CreateProductsPage from "./pages/CreateProductsPage";
import DetailProductPage from "./pages/DetailProductPage";

const App = () => {
  // create routes
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="create-product" element={<CreateProductsPage />} />
          <Route path="detail-product/:id" element={<DetailProductPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routes} />;
};

export default App;

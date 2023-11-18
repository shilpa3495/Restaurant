import { Provider } from "react-redux";
import store from "./utils/store";
import Login from "./Components/Login";
import OtpVerification from "./Components/OtpVerification";
import RestaurantInfo from "./Components/RestaurantInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoute";
import Restaurant from "./Components/Restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/verification",
    element: <OtpVerification />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className={`w-[375px] mx-auto h-screen flex`}>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

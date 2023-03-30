import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import { routerArr } from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import { store } from "./store/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routerArr,
  },
]);
function App() {
  return <Provider store={store}><RouterProvider router={router}></RouterProvider></Provider>
}

export default App;

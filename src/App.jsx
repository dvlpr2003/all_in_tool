import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";

function App(){
  const router = createBrowserRouter(
    [
      {
        element:(<AppLayout/>),
        children:[
          {
            element:(<Home/>),
            path:"/"
          }
        ]

      }
    ]
  )
  return(
  <RouterProvider router = {router}/>
  )

}
export default App;
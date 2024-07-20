import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";
import Jpgtopdf from "./convert to pdf/jpeg to pdf/jpg-to-pdf";

function App(){
  const router = createBrowserRouter(
    [
      {
        element:(<AppLayout/>),
        children:[
          {
            element:(<Home/>),
            path:"/"
          },
          {
            element:(<Jpgtopdf/>),
            path:"jpg-to-pdf"
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
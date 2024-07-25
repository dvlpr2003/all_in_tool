import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";
import Jpgtopdf from "./convert to pdf/jpeg to pdf/jpg-to-pdf";
import JpgToPdfEdit from "./convert to pdf/jpeg to pdf/jpeg-to-pdf-edit";

function App(){
  const router = createBrowserRouter(
    [
      {
        element:(<AppLayout/>),
        children:[
          {
            element:(<JpgToPdfEdit/>),
            path:"/"
          },
          {
            element:(<Jpgtopdf/>),
            path:"jpg-to-pdf/",
          },
          {
            element:(<JpgToPdfEdit/>),
            path:"jpg-to-pdf/edit-page/",
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
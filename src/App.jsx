import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";
import JpgToPdfEdit from "./convert to pdf/jpeg to pdf/jpeg-to-pdf-edit";
import AddImgHome from "./convert to pdf/jpeg to pdf/Addimg/AddImgHome";

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
            element:(<AddImgHome/>),
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
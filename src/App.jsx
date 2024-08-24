import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";
import JpgToPdfEdit from "./convert to pdf/jpeg to pdf/jpg_to_pdf_main";
import AddImgHome from "./convert to pdf/jpeg to pdf/Addimg/AddImgHome";
import { DownloadPage } from "./convert to pdf/jpeg to pdf/Download_page/Download";

function App(){
  const router = createBrowserRouter(
    [
      {
        element:(<AppLayout/>),
        children:[
          {
            element:(<DownloadPage/>),
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
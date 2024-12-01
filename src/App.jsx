import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout/AppMainLayout";
import Home from "./UI/Home";
import JpgToPdfEdit from "./convert to pdf/jpeg to pdf/jpg_to_pdf_main";
import AddImgHome from "./convert to pdf/jpeg to pdf/Addimg/AddImgHome";
import { JpgDownloadPage } from "./convert to pdf/jpeg to pdf/Download_page/Download";
import Wordtopdf from "./convert to pdf/word to pdf/word_to_pdf_main";
import { WordDownloadPage  }  from "./convert to pdf/word to pdf/Download_page/Download";
import AnnotatePdf from "./convert to pdf/annotate_pdf/annotate";
import PPTtopdf from "./convert to pdf/PPT-to-PDF/ppt_to_pdf_main";
import { PPTxDownloadPage } from "./convert to pdf/PPT-to-PDF/Download_page/Download";

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
            element:(<Wordtopdf/>),
            path:"/word-to-pdf/"
          },
          {
            element:(<WordDownloadPage/>),
            path:"word-to-pdf/download"
          },

          {
            element:(<JpgToPdfEdit/>),
            path:"/jpg-to-pdf/",
          },
          {
            element:(<JpgDownloadPage/>),
            path:"jpg-to-pdf/download"
          },
          {
            element:(<PPTtopdf/>),
            path:"/ppt-to-pdf/"
          },
          {
            element:(<PPTxDownloadPage/>),
            path:"ppt-to-pdf/download"
            
          },


        ]

      }
    ]
  )
  return(
  <RouterProvider router = {router}/>
  )

}
export default App;
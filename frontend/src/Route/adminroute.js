import AdminDashboard from "../Components/AdminDashboard/adminDashboard.jsx"
import Form from "../Components/Pages/form"
import Video from "../Components/Video/video.jsx";
import  ProtectedOutlet from "../Protected.js"

const Adminroute = [
    {
      path: "/admin/",
      element: <ProtectedOutlet />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />
        }
      ]
    },
    {
      path: "/webform", 
      element: <ProtectedOutlet />,
      children: [
        {
          path: "", 
          element: <Form />
        }
      ]
    },
    {
        path: "/video", 
        element: <ProtectedOutlet />,
        children: [
          {
            path: "", 
            element: <Video />
          }
        ]
      },
      {
        path: `/editvideo/`, 
        element: <ProtectedOutlet />,
        children: [
          {
            path: "", 
            element: <Video />
          }
        ]
      }
  ];
  export default Adminroute;
  
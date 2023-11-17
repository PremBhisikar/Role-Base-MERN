import VideoDashboard from "../Components/VideoDashboard/videodashboard.jsx"
import  ProtectedOutlet from "../Protected.js"

const Videoroute = [
    {
        path: "/video/",
        element: <ProtectedOutlet />,
        children: [
            {
                path: "dashboard",
                element: <VideoDashboard />
        
            },
            {
                // path: "formedit",
                // element: <VideoDashboard />
        
            }

      ]
    }
]
export default Videoroute;
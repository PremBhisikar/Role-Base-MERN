import Webformedit from "../Components/AdminDashboard/editWebform.jsx";
import WebDasboard from "../Components/WebDashboard/webdashboard.jsx"
import  ProtectedOutlet from "../Protected.js"

const Webroute = [
    {
        path: "/web/",
        element: <ProtectedOutlet />,
        children: [
            {
                path: "dashboard",
                element: <WebDasboard />
            },
            {
                path: "formedit",
                element: <Webformedit />
            }

      ]
    }
]
export default Webroute;
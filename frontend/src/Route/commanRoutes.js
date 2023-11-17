import Login from "../Components/Login/login";
import Form from "../Components/Pages/form"
import ThankYouPage from "../Components/Thankyou/thankyou";
import Video from "../Components/Video/video";
const CommanRoutes = [
    {
        path: "/",
        element:<Login/>
    },
    {
        path: '/webform',
        element:<Form/>
    },
    {
        path: '/video',
        element:<Video/>
    },
    {
        path: '/Thankyou',
        element:<ThankYouPage/>
    }
]
export default CommanRoutes
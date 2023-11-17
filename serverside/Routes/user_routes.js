import express from 'express';
import {
    userSignUp, login, getUserById, userList, deleteUser, webdata, webdataList,
    webDataById, updatewebform, deletewebform, videodata,videodataList,videoDataById,updatevideoform,deletevideoform
} from '../controller/user_controller'
const router = express.Router();

// user routes
router.post("/userSignup",userSignUp)
router.post("/userlogin",login)
router.get("/getUserById",getUserById)
router.get("/userlist", userList)
router.put("/updateUser/updateUser");
router.delete("/deleteUser/:_id", deleteUser)

//webform routes
router.post("/webdata",webdata)
router.get("/webdatalist", webdataList)
router.get(`/webDataById`,webDataById)
router.put("/updatewebform", updatewebform);
router.delete("/deletewebform/:_id", deletewebform)

//videoform routes
router.post("/videodata",videodata)
router.get("/videodatalist", videodataList)
router.get("/videoDataById",videoDataById)
router.put("/updatevideoform", updatevideoform);
router.delete("/deletevideoform/:_id", deletevideoform);

export default router;
import { Router } from "express";
import registerUser from "../controllers/user_controllers.js"
import {upload} from "../middlewares/multer.middleware.js"

const router= Router()

router.route("/register").post(registerUser)
upload.fields([
    {
        name: "avatar",
        maxCount:1
    },
    {
        name:"coverImage",
        maxCount:1
    }
])
// router.route("/login").post(login)

export default router
import express from "express";
import { UserControllers } from "./user.controller";


const router =express.Router();


//will call controller function
router.post('/create-user', UserControllers.createUser);

// ekhane {} use korbo na cause router nejei ekta object
export const UserRoutes = router;

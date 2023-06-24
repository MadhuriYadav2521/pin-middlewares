import express from "express";
import {  changeAddress, changeEmail, changeNumber, changePanCardNum, login, register } from "../controllers/userController.js";
import {   checkPin, checksForRegister } from "../middlewares/authMiddleware.js";



var router = express.Router();


router.post('/register',checksForRegister,register);
router.post('/changeNumber',checkPin,changeNumber);
router.post('/changeEmail',checkPin,changeEmail);
router.post('/changeAddress',checkPin,changeAddress);
router.post('/changePanCardNum',checkPin,changePanCardNum);
router.post('/login',login);



export default router;
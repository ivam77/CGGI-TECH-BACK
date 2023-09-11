import { Router } from "express";
import signin from "../controllers/users/signin.js";
import register from "../controllers/users/register.js";
import read from "../controllers/users/read.js";
import generateToken from "../middlewares/generateToken.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import accountNotExists from "../middlewares/accountNotExists.js"
import validator from "../middlewares/validator.js";
import userSignin from "../schemas/user/signin.js";
import userRegister from "../schemas/user/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import signout from "../controllers/users/signout.js";
import uploadFile from "../middlewares/upload_file.js";
import  { uploadImage } from "../services/firebase.cjs";
// import registerGoogle from "../controllers/users/registerGoogle.js"
import create from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import Delete from "../controllers/users/delete.js";
import verifyCode from "../controllers/users/verifyCode.js";


const user_router = Router();

user_router.get('/', read);
user_router.post('/createAdmin', validator(userRegister), accountExists, createHash, create);
user_router.put('/updateAdmin/:id', update);
user_router.delete('/:id', Delete);
user_router.post("/signout", signout);
user_router.post("/signin", validator(userSignin), accountNotExists, passwordIsOk,generateToken,signin);
user_router.post('/register', uploadFile(), uploadImage, validator(userRegister), accountExists, createHash, register);
user_router.post('/google', validator(userRegister), accountExists, createHash,/*registerGoogle*/)
user_router.get('/verify/:verify_code', verifyCode)


export default user_router;

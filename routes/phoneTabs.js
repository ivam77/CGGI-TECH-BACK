import { Router } from "express";
import read from "../controllers/phoneTabs/read.js";
import read_one from "../controllers/phoneTabs/read.js";

const phoneTabs_router = Router()
phoneTabs_router.get('/', read)
phoneTabs_router.get('/product/:id', read_one)

export default phoneTabs_router
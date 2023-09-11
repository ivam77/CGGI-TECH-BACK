import { Router } from "express";
import read from "../controllers/AudioVideo/read.js";
import read_one from "../controllers/AudioVideo/read_one.js";

const audioVideo_router = Router()
audioVideo_router.get('/', read)
audioVideo_router.get('/product/:id', read_one) 

export default audioVideo_router
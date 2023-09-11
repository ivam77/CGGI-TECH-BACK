import { Router } from "express";
import create from "../controllers/gamers/create.js";
import read from "../controllers/gamers/read.js";
import read_one from "../controllers/gamers/read_one.js";

const gamers_router = Router()

gamers_router.post('/gamers', create); 
gamers_router.get('/', read)
gamers_router.get('/product/:id', read_one) 

export default gamers_router;
import { Router } from "express";
import read from "../controllers/products/read.js";
import read_one from "../controllers/products/read_one.js";
import create from "../controllers/products/create.js";
import productValidaton from "../schemas/products/productValidation.js"
import validator from "../middlewares/validator.js";
import Delete from "../controllers/products/delete.js"
import Update from "../controllers/products/update.js"
import pag_appliances from "../controllers/products/pag_appliances.js";
import pag_gamers from "../controllers/products/pag_gamers.js";
import pag_techs from "../controllers/products/pag_techs.js";

const products_router = Router()
products_router.get('/', read)
products_router.get('/appliances', pag_appliances)
products_router.get('/gamers', pag_gamers) 
products_router.get('/techs', pag_techs) 
products_router.get('/:id', read_one)
products_router.post('/created', validator(productValidaton), create)
products_router.delete('/:id', Delete)
products_router.put('/:id', Update)
export default products_router
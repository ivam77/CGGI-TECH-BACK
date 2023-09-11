import express from 'express'
import phoneTabs_router from './phoneTabs.js'
import audioVideo_router from './audiovideo.js';
import gamers_router from './gamers.js';
import products_router from './products.js';
import user_router from './users.js';
import paypal_router from './paypal.js';

let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/audiovideo', audioVideo_router)
router.use('/products', products_router)
router.use('/phoneTabs' , phoneTabs_router)
router.use('/gamers', gamers_router)
router.use('/user', user_router)
router.use('/paypal', paypal_router)


export default router
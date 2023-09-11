import Electrodomestic from '../Electrodomestic.js'
import 'dotenv/config.js'
import '../../config/db.js'

let ElectroData=[{
    title:'SAMSUNG WW65A4000EEU 6.5',
    brand:'Samsung',
    type: 'Laundry',
    category:'Electrodomestics',
    description:{
    Text:["Enjoy greater energy efficiency, less noise, and long-lasting performance. Digital Inverter technology uses powerful magnets for quieter, more powerful performance, yet consumes less power than a universal motor. Provides exceptional durability",
    "Keep your clothes spotless, even if they are very dirty. The Bubble Soak feature helps remove a wide variety of tough stains including blood, tea, wine, make-up and grass. Clothes are thoroughly soaked in active bubbles, so dirt and stains are loosened and can be removed more effectively",
    "Avoid the cost and inconvenience of a broken machine. Smart Check is an automatic error monitoring system that you can use with an app*. Detects and diagnoses problems at an early stage and provides quick and easy solutions to fix problems, saving you time and money on repairs"
],
    Size:"850 x 600 x 550",
    weight:"57 kg",
    Color:"White",
    Capacity:"6,5 kg",
    WashType:"Front load",
    Velocity:"1000 RPM"
    }, 
    cover_photo:[
    "https://images.samsung.com/is/image/samsung/p6pim/ar/ww65a4000eeubg/gallery/ar-ww4000j-ww65a4000eeubg-533902502?$1300_1038_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/ww65a4000eeubg/gallery/ar-ww4000j-ww65a4000eeubg-533902490?$684_547_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/ww65a4000eeubg/gallery/ar-ww4000j-ww65a4000eeubg-533902488?$684_547_PNG$"
],
    price: 0,
    Moreview: true,
    available: 6,
},
{
    title:'LG WM8516EE6',
    brand:'LG',
    type: 'Laundry',
    category:'Electrodomestics',
    description:{
    Text:["Inverter Direct Drive Motor 22 years of useful life.Less noise, Less Vibration and 10 year warranty on the motor.",
    "6 Motion DD technology provides optimized movement combinations for each type of tissue. Therefore, it offers powerful washing performance with less damage.",
    "LG has updated the Inverter Direct Drive motor with the latest technology. The improved Direct Drive Motor has better wash performance, allowing you to wash a variety of fabrics more efficiently and with less damage."
],
    Size:"600 x 85 x 55",
    weight:"57 kg",
    Color:"Silver",
    Capacity:"8.5kg",
    WashType:"Frontal load",
    Velocity:"1000RPM"
    }, 
    cover_photo:[
    "https://www.icasahogar.com.ar/21150-medium_default/lavarropas-85kg-frontal-lg-wm8514ee6-inverter-gris.jpg",
    "https://www.icasahogar.com.ar/21151-medium_default/lavarropas-85kg-frontal-lg-wm8514ee6-inverter-gris.jpg",
    "https://www.icasahogar.com.ar/21153-medium_default/lavarropas-85kg-frontal-lg-wm8514ee6-inverter-gris.jpg"
],
    price: 0,
    Moreview: true,
    available: 4,
},
{
    title:'DREAN NEXT 6.06 ECO 6 ',
    brand:'Drean',
    type: 'Laundry',
    category:'Electrodomestics',
    description:{
    Text:["Class AA. Cap.6 Kg. Led display. Self-adaptive charging. Sist.Autobalance. 29 Alternative washing. Oversized door. Specific washing cycles. Anti-wrinkle. Quick wash. 1/2 hr wash. Eco Wash. Hand wash. Temperature control. 600RPM.",
    ],
    Size:"850 x 590",
    weight:"57 kg",
    Color:"white",
    Capacity:"6kg",
    WashType:"Front load",
    Velocity:"600RPM"
    }, 
    cover_photo:[
    "https://medias.musimundo.com/medias/size515-135728-03.jpg?context=bWFzdGVyfGltYWdlc3wzODY4NHxpbWFnZS9qcGVnfGgxYy9oOTAvMTA0OTU4MzgxNTg4Nzgvc2l6ZTUxNV8xMzU3MjhfMDMuanBnfDE5ZWU3NGU2ZjgwZWZhNTVhZTlhYzM2M2QxZTljYTkwOGI3MzQ0ZTRiMTNiNjk3NWVmNzY5Y2RlYjdkNzRkZWE",
    "https://medias.musimundo.com/medias/size515-135728-04.jpg?context=bWFzdGVyfGltYWdlc3wzOTc1MXxpbWFnZS9qcGVnfGg1NS9oOWEvMTA0OTU4Mzg0NTM3OTAvc2l6ZTUxNV8xMzU3MjhfMDQuanBnfGIxMjEwYzRjYjlhNWQyNGFkMmExYTljODRjNjgyNDcwYjM2MThmN2QxMDAxZmQzYjI3OTU4NTI5NDZjYjRjY2U",
    "https://medias.musimundo.com/medias/size515-135728-05.jpg?context=bWFzdGVyfGltYWdlc3wzOTY1NnxpbWFnZS9qcGVnfGg3YS9oYTQvMTA0OTU4Mzg3NDg3MDIvc2l6ZTUxNV8xMzU3MjhfMDUuanBnfDcwMDE1NWMzYzA0NWY1NTcyMDgxOTUxMmI3ZGE1ZjM1ZWEzNzA4ZjdlMjNmYzc2MDA4MTJjOWZkZjk0MjFiMGY"
],
    price: 0,
    Moreview: false,
    available: 8,
},
{
    title:' WHIRLPOOL WW11BT 700 ',
    brand:'WHIRLPOOL',
    type: 'Laundry',
    category:'Electrodomestics',
    description:{
    Text:["The WW11BT Whirlpool washing machine has a top load and a washing capacity of 11 kilograms, thanks to its energy efficiency A-C allows you to save, it also has a stainless steel drum that guarantees a longer duration.",
    "With a spin speed of 700 RPM, the garments finish the wash cycle semi-dry. The impeller washing system generates rotating movements so that the clothes rub against each other, generating water currents that help to obtain greater depth in the cleaning.",
    "It has a washing cycle for pet clothes that provides better removal of pet hair, removes up to 80% more hair. With the quick wash cycle, clean clothes are obtained in 30 minutes. The large capacity of this washing machine and its expert cycle allow you to wash a queen size duvet."
],
    Size:"110 x 62 x 66 ",
    weight:" 45kg",
    Color:"Silver",
    Capacity:"11 Kg",
    WashType:"load",
    Velocity:"700 RPM"
    }, 
    cover_photo:[
    "https://www.megatone.net/Images/Articulos/thumb2x/39/LAV1170PHI.jpg",
    "https://www.megatone.net/Images/Articulos/thumb2x/39/LAV1170PHI_2.jpg",
    "https://carrefourar.vtexassets.com/arquivos/ids/253817/7797750979672_02.jpg?v=637962607699700000"
],
    price: 0,
    Moreview: false,
    available: 4,
},
{
    title:'Oster BLSTPYG1211NBG 1.5 L',
    brand:'Oster',
    type: 'Blender',
    category:'Electrodomestics',
    description:{
    Text:["practical and safe, its pulse function allows you to start the product intermittently as needed or according to the content of the jug.",
    "It is suitable for grinding ice in seconds and preparing refreshing smoothies on hot days. Also, you can make your own cocktail drinks at home without having to go to a bar. Now the bartender is you!",
    "Its removable blade ensures that washing is impeccable and prevents the accumulation of residues that could impair the flavor of food."
],
    Size:"",
    voltage:"220V",
    Color:"Black",
    Capacity:"1.5 L",
    Power:"600W",
    Velocity:3
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_690238-MLA48089495239_112021-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_703576-MLA48089364759_112021-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_882552-MLA48089364764_112021-R.webp"
],
    price: 0,
    Moreview: true,
    available: 5,
},
{
    title:'Electrolux Efficient Bll15',
    brand:'Electrolux',
    type: 'Blender',
    category:'Electrodomestics',
    description:{
    Text:["An essential appliance in your home. The Electrolux BLL15 blender will help you get incredible results in everything you prepare, whether you want to enjoy a very cold drink, sauces and soups, or delicious desserts. Always have it at hand!",
   ],
    voltage:"220V",
    Color:" White",
    Capacity:"2L",
    Power:"500W",
    Velocity:2
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_902448-MLU70400780846_072023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_695836-MLU70400144180_072023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_787594-MLU70400780848_072023-O.webp"
],
    price: 0,
    Moreview: false,
    available: 10,
},
{
    title:'Philips Daily Collection HR2127/90',
    brand:'Philips',
    type: 'Blender',
    category:'Electrodomestics',
    description:{
    Text:["Philips is committed to creating innovative and technological products that make a real difference to those who use them. This is why the brand brings together quality and innovation to offer you a blender that will be essential in your kitchen and that you will be able to use whenever you want.",
    "Its pulse function allows you to start the product intermittently as needed or according to the content of the jug.",
    "It is suitable for grinding ice in seconds and preparing refreshing smoothies on hot days. Also, you can make your own cocktail drinks at home without having to go to a bar. Now the bartender is you!"
],
    voltage:"220V",
    Color:"Black",
    Capacity:"2L",
    Power:"550W",
    Velocity:2
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_710297-MLA52337550714_112022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_892643-MLA52337662432_112022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_913265-MLU69953466284_062023-R.webp"
],
    price: 0,
    Moreview: false ,
    available: 8,
},
{
    title:'Winco W1910 600 mL',
    brand:'winco',
    type: 'Blender',
    category:'Electrodomestics',
    description:{
    Text:["Winco's greatest achievement is to offer its users the best price-quality combination. Its products are effective solutions that make everyday life easier. With the W1910 blender, make exquisite creations to surprise your guests!",
 ],
    voltage:"220W",
    Color:"Silver",
    Capacity:"0,6L",
    Power:"500W",
    Velocity:1
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_650139-MLA48800496860_012022-R.webp",
    "https://http2.mlstatic.com/D_NQ_NP_731428-MLU70044724546_062023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_845069-MLU70064603099_062023-O.webp"
],
    price: 0,
    Moreview: true ,
    available: 4,
},
{
    title:'Philco PHCH050 ',
    brand:'Philco',
    type: 'Kitchen',
    category:'Electrodomestics',
    description:{
    Text:["This Philco kitchen will help you show off and surprise all your guests. Its design and functionality guarantee you the best performance so that you can prepare your dishes in a comfortable and practical way.",
],
    Color:"Silver",
  Burners:4,
tactil:"NO",
ignition:"Electric ignition",
oven:"YES"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_723816-MLA43786688185_102020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_803056-MLA43786733026_102020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_969327-MLA43786733029_102020-R.webp"
],
    price: 0,
    Moreview: true,
    available: 2,
},

{
    title:'Longvie Standard 13331',
    brand:'Longvie',
    type: 'Kitchen',
    category:'Electrodomestics',
    description:{
    Text:["Longvie is a company committed to the environment, which since 1918 has produced and sold household items. Their kitchens are characterized by great robustness that remains unchanged over the years. The quality of the materials allows you to make the most of all the power of your burners without generating high energy consumption.",
  ],
    Color:"White",
  Burners:4,
tactil:"NO",
ignition:"Gas",
oven:"YES"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_730587-MLA53087619395_122022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_739805-MLA53087616491_122022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_904512-MLU69840595143_062023-R.webp"
],
    price: 0,
    Moreview: true,
    available: 10,
},

{
    title:'Drean CD5505AI ',
    brand:'Drean',
    type: 'Kitchen',
    category:'Electrodomestics',
    description:{
    Text:["This Drean kitchen will help you show off and surprise all your guests. Its design and functionality guarantee you the best performance so that you can prepare your dishes in a comfortable and practical way.",
],
    Color:"White",
  Burners:"4",
tactil:"NO",
ignition:"Gas",
oven:"YES"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_688987-MLA69510049137_052023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_974918-MLA69497172078_052023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_686375-MLU70044735998_062023-R.webp"
],
    price: 0,
    Moreview: false,
    available:  8,
},

{
    title:'Whirlpool WFX56DX',
    brand:'Whirlpool',
    type: 'Kitchen',
    category:'Electrodomestics',
    description:{
    Text:["This Whirlpool kitchen will help you show off and surprise all your guests. Its design and functionality guarantee you the best performance so that you can prepare your dishes in a comfortable and practical way.",

],
    Color:"Silver",
  Burners:4,
tactil:"NO",
ignition:"Electric",
oven:"YES"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_707214-MLA41826108409_052020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_753306-MLA41826108410_052020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_617950-MLA41826108411_052020-R.webp"
],
    price: 0,
    Moreview: false,
    available: 7,
},
{
    title:'LG Dual Cool split inverter',
    brand:'LG',
    type: 'Air',
    category:'Electrodomestics',
    description:{
    Text:["LG, a pioneer in the technological field and with an international track record, is committed to providing you with the highest quality products and solutions on the market. Enjoying the best air conditioning and with a design that fits with your home is undoubtedly thinking of LG. Air conditioning your spaces throughout the year is something important for your comfort. An LG Dual Cool hot/cold air conditioner is the best decision, since you get a better cost-benefit ratio.",
   ],
    Color:"White",
 PowerRefrigeration:"1640W",
 PowerHeating:"1500W",
 TypeAir:"cold / hot",
 voltage:"220V",
 Size:"998 x 210 x 345"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_826176-MLA52734816187_122022-O.webp",
    "https://http2.mlstatic.com/D_Q_NP_601174-MLA49735681646_042022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_827362-MLA49735695594_042022-R.webp"
],
    price: 0,
    Moreview: true,
    available: 5,
},
{
    title:'Samsung split inverter',
    brand:'Samsung',
    type: 'Air',
    category:'Electrodomestics',
    description:{
    Text:["Air conditioning your spaces throughout the year is undoubtedly something important for your comfort and that of your loved ones. Having an air conditioning with hot / cold function is the best decision. With this Samsung air I got a better cost-benefit ratio.",
   ],
    Color:"White",
 PowerRefrigeration:"1542 W",
 PowerHeating:"1540 W",
 TypeAir:"cold / hot",
 voltage:"220V",
 Size:"971 x 228 x 321"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_657816-MLA52319566990_112022-R.webp",
    "https://http2.mlstatic.com/D_NQ_NP_978953-MLA52319545969_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_833820-MLA52319617771_112022-O.webp"
],
    price: 0,
    Moreview: true,
    available: 2,
},
{
    title:'Noblex Split Inverter Eco Cooling',
    brand:'Noblex',
    type: 'Air',
    category:'Electrodomestics',
    description:{
    Text:["Air conditioning your spaces throughout the year is undoubtedly something important for your comfort and that of your loved ones. Having an air conditioning with hot / cold function is the best decision. With this Samsung air I got a better cost-benefit ratio.",
   ],
    Color:"White",
 PowerRefrigeration:"2800W",
 PowerHeating:"2800W",
 TypeAir:"cold / hot",
 voltage:"220V",
 Size:"80 X 33 X 55"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_882490-MLA54868197986_042023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_848803-MLA54863823937_042023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_600240-MLA54868197470_042023-R.webp"
],
    price: 0,
    Moreview: false,
    available: 5,
},
{
    title:'RCA split RE3200FC',
    brand:'RCA',
    type: 'Air',
    category:'Electrodomestics',
    description:{
    Text:["Air conditioning your spaces throughout the year is undoubtedly something important for your comfort and that of your loved ones. Having an air conditioning with hot / cold function is the best decision. With this RCA air I got a better cost-benefit ratio.",
   ],
    Color:"White",
 PowerRefrigeration:"996W",
 PowerHeating:"996W",
 TypeAir:"cold / hot",
 voltage:"220V",
 Size:"770 x 201 x 250"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_798317-MLA53182942618_012023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_648506-MLU70198914863_062023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_702959-MLU70198914871_062023-R.webp"
],
    price: 0,
    Moreview: true,
    available: 4,
},
{
    title:'Samsung RS27T5561',
    brand:'Samsung',
    type: 'Fridge',
    category:'Electrodomestics',
    description:{
    Text:["Enjoy your fresh food and store it in a practical and comfortable way in the Samsung refrigerator, the protagonist of the kitchen.",
    "Freshness in your food.Every time you open the door hot air leaks in; Therefore, by having temperature control, you will be able to regulate the degrees so that your products always stay fresh. In addition, due to its inverter technology, this refrigerator cools your meals through an intelligent system with sensors that regulate the speed of the motor, maintaining the temperature evenly inside."
   ],
    Color:"Black",
    voltage:"220V",
    Size:"912 x 851 x 1780",
    Capacity:"Fridge:487L /Freezer:269L",
    Tech:"No frost",
    Digital: "YES",
    Weight:"139kg"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_972873-MLA50008739804_052022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_863034-MLA50008739807_052022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_920285-MLA50008783177_052022-R.webp"
],
    price: 0,
    Moreview: true,
    available: 1,
},
{
    title:'Electrolux DF3900',
    brand:'Electrolux',
    type: 'Fridge',
    category:'Electrodomestics',
    description:{
    Text:["Electrolux is committed to innovation and customer satisfaction. That is why it develops various models of refrigerators and adjusts its design and technology to each type of home.",
    "Comfort for your home Its no frost system prevents the generation of frost and will allow you to preserve the flavor and nutritional properties of the products."
   ],
    Color:"Silver",
    voltage:"220V",
    Size:"613 x 673 x 1856",
    Capacity:"Fridge: 272L /Freezer: 73L",
    Tech:"No frost",
    Digital: "NO",
    Weight:"63kg"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_636318-MLA48828050857_012022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_881428-MLA48828095408_012022-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_976064-MLU69994724160_062023-R.webp"
],
    price: 0,
    Moreview: false,
    available: 10,
},
{
    title:'Samsung RT38K5932 ',
    brand:'Samsung',
    type: 'Fridge',
    category:'Electrodomestics',
    description:{
    Text:["Enjoy your fresh food and store it in a practical and comfortable way in the Samsung refrigerator, the protagonist of the kitchen.",
    "Freshness in your food.Every time you open the door hot air leaks in; Therefore, by having temperature control, you will be able to regulate the degrees so that your products always stay fresh. In addition, due to its inverter technology, this refrigerator cools your meals through an intelligent system with sensors that regulate the speed of the motor, maintaining the temperature evenly inside."
   ],
    Color:"Silver",
    voltage:"220V",
    Size:"675 x 668 x 1785",
    Capacity:"Fridge: 293L/Freezer: 89L",
    Tech:"No frost",
    Digital: "NO",
    Weight:"68kg"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_976585-MLA40492791635_012020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_879763-MLA40493211410_012020-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_908565-MLU69811155240_062023-R.webp"
],
    price: 0,
    Moreview: true,
    available: 5,
},
{
    title:'Electrolux DFN3000',
    brand:'Electrolux',
    type: 'Fridge',
    category:'Electrodomestics',
    description:{
    Text:["Electrolux is committed to innovation and customer satisfaction. That is why it develops various models of refrigerators and adjusts its design and technology to each type of home.",
    "Indoor practicality.The arrangement of 2 shelves will provide you with great space savings and easy location of your products. Thanks to their resistant material, you will not have to worry about the weight you place on them and you will organize each corner to your liking to optimize their use. It has 1 shelf and a capacity of 73 liters, which will facilitate the distribution and order of your frozen foods."
   ],
    Color:"Silver",
    voltage:"220V",
    Size:"613 x 673 x 1536",  
    Capacity:"Fridge: 187L/Freezer: 73L",
    Tech:"No frost",
    Digital: "NO",
    Weight:"58kg"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_Q_NP_933105-MLA54713909817_032023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_977139-MLA54714153257_032023-R.webp",
    "https://http2.mlstatic.com/D_Q_NP_758866-MLA54714121591_032023-R.webp"
],
    price: 0,
    Moreview: true,
    available: 8,
},
]
Electrodomestic.insertMany(ElectroData)
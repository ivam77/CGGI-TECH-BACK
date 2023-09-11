import AudioVideo from '../AudioVideo.js'
import 'dotenv/config.js'
import '../../config/db.js'

let AudioVideos = [{
    title:'Smart TV 32" HD TCL L32S65A-F',
    brand:'TCL',
    type: 'TV',
    description:{
    Text:"With this Android TV you will have your favorite streaming platforms and services within reach, such as YouTube, Netflix and Prime Video, as well as the Google Play Store where you will find the most popular apps and games.",
    screen: {
    Inches:'31.5"',
    Resolution:"1366 x 768 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    Processor:"CA53 * 4 64bit",
    },
    Connectivity:{
    InputsHDMI: 2, 
    InputsUSB: 1, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'Yes'
    },
    Sound:{
    AudioFormats: 'MP3 / WMA / AC3',
    NumberoOfSpeakers: 2,
    Power: '2 x 5W'
    },
    Dimensions:{
    High: "42.5 cm",
    Width: "72.4 cm",
    Depth: "8.8 cm",
    HighBased: "47.5 cm",
    WidthWithBase: "72.4 cm",
    DepthWithBase: "18 cm",
    VESAmeasure: "100 x 100",
    Weight: "3.9 kg"
    },
    Model: "L32S65A-F",
    Origin: "Argentina",
    },
    cover_photo:[
    "https://images.fravega.com/f500/51cb68c8c88b71c282054347ebe429e2.jpg",
    "https://images.fravega.com/f300/d9a8a135637c0acd4db50fdff7a844b7.jpg.webp",
    "https://images.fravega.com/f300/abd2a4884d3f64e4ca09bdafe75be5fa.jpg.webp"
    ],
    price: 83.999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Smart TV Philips 43" FHD Android TV 43PFD6917/77',
    brand:'Philips',
    type: 'TV',
    description:{
    Text:"You will have at your fingertips the most popular streaming platforms and services, such as Netflix, YouTube, Disney+, Amazon Prime Video and more, so you can enjoy FHD resolution to the fullest.",
    screen:{
    Inches:'43"',
    Resolution:"920 x 1080 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 3, 
    InputsUSB: 2, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'Yes'
    },
    Sound:{
    NumberoOfSpeakers: 2,
    Power: '16W RMS'
    },
    Dimensions:{
    High: "568 mm",
    Width: "958 mm",
    Depth: "82 mm",
    HighBased: "587 mm",
    WidthWithBase: "958 mm",
    DepthWithBase: "227 mm",
    VESAmeasure: "100 x 200 mm",
    Weight: "7.2 kg"
    },
    Model: "43PFD6917/77",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f1000/b9c3d1121c73ded6266ec57f5b0bdd31.jpg",
    "https://images.fravega.com/f300/55ec578e88ea05ec5fcebfacc16df24d.jpg.webp",
    "https://images.fravega.com/f300/d3001894cfcacb9fde93548690e380fb.png.webp"
    ],
    price: 129.999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'Smart TV 4K UHD Samsung 50" UN50AU7000',
    brand:'Samsung',
    type: 'TV',
    description:{
    Text:"The Samsung UN50AU7000 Smart TV has a resolution four times higher than a Full HD TV (3840 x 2160 pixels) and has a 4K Crystal Processor that guarantees optimized color expression so you can see every detail. Its LED panel also offers the High Dynamic Range (HDR) feature, which increases the bright expression of the TV so you can enjoy a huge spectrum of colors and visual details, even in the darkest scenes.",
    screen:{
    Inches:'50"',
    Resolution:"3840 x 2160 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 3, 
    InputsUSB: 1, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'No'
    },
    Sound:{
    NumberoOfSpeakers: 2,
    },
    Dimensions:{
    High: "64.4 cm",
    Width: "111.6 cm",
    Depth: "5.9 cm",
    HighBased: "71.9 cm",
    WidthWithBase: "111.6 cm",
    DepthWithBase: "25 cm",
    VESAmeasure: "200 x 200",
    Weight: "11.6 kg"
    },
    Model: "UN50AU7000",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f500/d7ca24bf5639a7db78c31aa9fa963be8.jpg",
    "https://images.fravega.com/f300/676b4dcf411b14af655c5c289ce72f33.jpg.webp",
    "https://images.fravega.com/f300/e819eb5a8b27a29e8684e12910627e50.jpg.webp"
    ],
    price: 184.999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Smart TV 65" 4K UHD Philips 65PUD7906/77',
    brand:'Philips',
    type: 'TV',
    description:{
    Text:"You can play on your TV the content (photos, music and videos) stored on external devices such as smartphones, tablets or flash drives by connecting them through their USB ports. Also, it has HDMI inputs so you can link audio and video players or game consoles.",
    screen:{
    Inches:'65"',
    Resolution:"3840 x 2160 pixels",
    ScreenFormat:"Flat",
    },
    GeneralFeatures:{
    SmartTV:"Yes",
    },
    Connectivity:{
    InputsHDMI: 4, 
    InputsUSB: 2, 
    InternetConnection: 'Yes', 
    NFC: 'No',
    HeadphoneJack: 'No'},
    Sound:{
    NumberoOfSpeakers: 2,
    },
    Dimensions:{
    High: "83.3 cm",
    Width: "145 cm",
    Depth: "8.5 cm",
    HighBased: "86 cm",
    WidthWithBase: "145 cm",
    DepthWithBase: "29.3 cm",
    Weight: "21,5 kg"
    },
    Model: "65PUD7906/77",
    Origin: "Argentina"
    },
    cover_photo:[
    "https://images.fravega.com/f300/29eff4cc658192d7484e0a59bc357a3e.jpg.webp",
    "https://images.fravega.com/f300/4714e59e43defdf07a14c86c25109ddd.jpg.webp",
    "https://images.fravega.com/f300/953259f05194123b82c2bb5c58df21a2.jpg.webp"
    ],
    price: 324.999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'PORTATILE SPEAKERS JBL FLIP 6 GRAY',
    brand:'JBL',
    type: 'SPEAKERS',
    description:{
    Text:'Portaitl speaker. A higher and more powerful sound. Dust and water resistant according to IP67 protection. 12 Hours of battery. Daring Design PartyBoost raises the level of the party. Application JB L Portable. USB charging protection. Bluetooth wireless reproduction. New ecological packaging. Transducers: 45 x 80 mm bass speaker ( 1 75 x 3 ") 16 mm treble speaker ( 0 6" ). Output power: 20 W bass speaker 10 W RMS treble speaker. Frequency response: 63 Hz 20 kHz. Signal / noise ratio: > 80 dB. Battery type: Lithium ion polymer of 17 28 Wh ( equivalent to 3 6 V / 4800 mAh ). Battery charging time: 2 5 hours at 5 V / 3 A. Music playing time: up to 12 hours ( depending on the volume and content of the audio ). Cable type: USB-C charging cable. Cable length: 1 2 m / 47 2".Maximum operating temperature: 45 C. Wireless specifications. Bluetooth version: 5.1. Bluetooth profile: A2DP 1.3 AVRCP 1.6. Frequency range',
    EAN: 6925281993060,
    High: 6.8,
    Width: 17.8,
    Color: "GRAY",
    Guarantee: 6,
    Model: 'FLIP 6',
    Origin: 'CHINA',
    Weight: 0.55,
    Depth: 7.2,
    ESMA: 'N / A'
    },
    cover_photo: ["https://medias.musimundo.com/medias/00508020-178122-178122-01.png-178122-01.png-size515?context=bWFzdGVyfGltYWdlc3wyNTA2MTl8aW1hZ2UvcG5nfGg3Ni9oOWYvMTA0MDc0Njc3MTI1NDIvMDA1MDgwMjAtMTc4MTIyLTE3ODEyMl8wMS5wbmctMTc4MTIyXzAxLnBuZ19zaXplNTE1fGE4NDQ5NTFjN2Q5MjM2YjljNGQ3MTY5NWE5NTI4M2UzY2ZkZmRhNGJiZTQyMjAxOTJkNjQ2ZjQ2MjQxMzdiODg"],
    price: 74.799,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH PHILIPS TAS1505 BLACK SPEAKERS',
    brand:'PHILIPS',
    type: 'SPEAKERS',
    description:{
    Text:'ROBUST AND RESISTANT TO WATER IPX7. THIS ALTAVOZ BLUETOOTH PORTÁTIL ACCOUNTS WITH IPX7 CLASSIFICATION WHAT MEANS THAT A TOTAL IMMERSION CAN BE RESISTED IN UNTIL WATER 1 METRO DEEPHUNDITY FOR UNTILE 30 MINUTES. YOU CAN FUN THE PILET OR EVEN IN THE FIGHT WITH THE PILET OR EVEN WITHIN IT. THE INALAMBRIC REACH IS 20 M. 8 HOURS OF REPRODUCTION TIME 2 5 HOURS OF LOADING TIME. THE SOUND IS MAIN INCLUSIVE WHEN MUSIC REPRODUCISES EVERY VOLUME AND A PASSIVE RADIATOR IMPULS THE SERIOUS. YOU GET 8 HOURS OF REPRODUCTION TIME AND A COMPLETE LETTER LAT 2 5 HOURS. THE BLUETOOTH CONNECTION IS STABLE AND THE EMPAREHOUSE IS SIMPLE..',
    EAN: 4895229111011,
    High: 7.8,
    Width: 6.4,
    Color: "BLACK",
    Guarantee: 12,
    Model: 'TAS1505',
    Origin: 'CHINA',
    Weight: 0.14,
    Depth: 6.4,
    ESMA: 'N / A'
    },
    cover_photo: ["https://medias.musimundo.com/medias/size515-178913-01.png?context=bWFzdGVyfGltYWdlc3w0MjQ4MTF8aW1hZ2UvcG5nfGgwMS9oZWYvMTA0ODIzNDQzMjkyNDYvc2l6ZTUxNV8xNzg5MTNfMDEucG5nfDk4MWZmZDM3Y2I4NWY0NzE2MTk5OTk0NDExNTAwMjgzYzJmOTMwYWRlMzFmNzViODU5MWNhYWNjMzk2ZmFiYjg"],
    price: 11.539,
    verified: true ,
    verify_code:'',
    available: 10,
},
{
    title:'BLUETOOTH DAEWOO YAND BLACK SPEAKERS',
    brand:'DAEWOO',
    type: 'SPEAKERS',
    description:{
    Text:'· 1400 W. PMPO. · 2 woofer of 6.5". · RGB lights. · BT / USB / SD / MIC / AUX CONNECTION. · FM Radio. · Rechargeable battery. · LED display',
    EAN: 731199781783,
    High: 'fifty',
    Width: 'twenty',
    Color: "BLACK",
    Guarantee: 12,
    Model: 'YAND',
    Origin: 'CHINA',
    Weight: 1.76,
    Depth: 'twenty',
    ESMA: 'N / A'
    },
    cover_photo: ["https://medias.musimundo.com/medias/size515-176753-01.jpg?context=bWFzdGVyfGltYWdlc3w0ODY5M3xpbWFnZS9qcGVnfGgwMi9oMmQvMTA0NzI2MjQ4ODE2OTQvc2l6ZTUxNV8xNzY3NTNfMDEuanBnfDU1ODVhYTkwMDMwODQ0NGEwODQyZTFkM2ZhNTJhOTBiOGI3Y2EzNzFkOTU4YTYyZGEzZmFjY2MwM2MxOTQyMGY"],
    price: 31.799,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'PORTATILE SPEAKERS JBL FLIP 6 GRAY',
    brand:'JBL',
    type: 'SPEAKERS',
    description:{
    Text:'I lived the Audio 3D experience connecting them to another Twin through TWS and placing you in the center.',
    EAN: 7797026958110,
    High: 25,
    Width: 8.5,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'TWIN',
    Origin: 'CHINA',
    Weight: 0.68,
    Depth: 8.5,
    ESMA: 'N / A'
    },
    cover_photo: ["https://medias.musimundo.com/medias/00399070-177108-177108-01.png-177108-01.png-size515?context=bWFzdGVyfGltYWdlc3wxNzE4MjF8aW1hZ2UvcG5nfGg4MS9oM2EvMTAzODE1NjExMzUxMzQvMDAzOTkwNzAtMTc3MTA4LTE3NzEwOF8wMS5wbmctMTc3MTA4XzAxLnBuZ19zaXplNTE1fDE3YzNiYmM2MmE2NTYxZWZmMjkwM2Y2ODNmMzc5MGI4Y2VlYTRjMTgyNWExM2Q5NzI2NmYzY2ExODg5ODVhMWU"],
    price: 14.999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH DAEWOO DW-CS3105-PNK PINK HEADPHONES',
    brand:'DAEWOO',
    type: 'HEADPHONES',
    description:{
    Text:"IN EAR AURICULAR WITH TECHNOLOGY TWS. MICROFON CONEXION INALAMBRICA. VOLUME CONTROL. VOLUME CONTROL. FREQUENCY RANGE 2.4HZ - 2.4 GHZ. AUTONOMY 3HS OF REPRODUCTION. 2 HS CHARGE TIME. BATTERY REMAIN BASE: LITE 300 MAH. NET MEASURES: 4X2X5 CM. BRUTE MEASURES: 9.9X9.9X3.3CM. WEIGHT NET 108G. WEIGHT 115G.",
    EAN: 7798366201423,
    Color: "PINK",
    Guarantee: 6,
    Model: 'DW-CS3105-PNK',
    Origin: 'CHINA',
    Type: 'IN EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00463001-177533-177533-01.png-177533-01.png-size515?context=bWFzdGVyfGltYWdlc3wxMjQwMDR8aW1hZ2UvcG5nfGgwNS9oMTIvMTAzODE0OTgwODk1MDIvMDA0NjMwMDEtMTc3NTMzLTE3NzUzM18wMS5wbmctMTc3NTMzXzAxLnBuZ19zaXplNTE1fDY1ODMzYWI2YWY2ODY5ZDM5OTRlOGIwNWYyZDI5ZGNjMWYxYzBjMTZjMDEzYjdiMjM2NzQ0ODA0YTE5YzRlMDU"
    ],
    price: 6.999,
    verified: true ,
    verify_code:'',
    available: 2,
},
{
    title:'BLUETOOTH SOUL BT881 S600 BLACK HEADPHONES',
    brand:'SOUL',
    type: 'HEADPHONES',
    description:{
    Text:"AURICULAR BLUETOOTH STEREO WITH MICR VOLUME CONTROL?COURT AND READY FONUS OF MICROSD MEMORIES. CAPACITY: 50MW - IMPEDANCE: 32- SENSITIVITY: 108 DB / MW. FREQUENCY: 12-22000 HZ-CABLE LONGITUDE: 1.2M - CONECTOR: 3.5MM",
    EAN: 7798366201423,
    High: 21,
    Width: 18,
    Weight: 0.380,
    Depth: 10,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'BT881 S600',
    Origin: 'CHINA',
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00210027-174973-174973-01.png-174973-01.png-size515?context=bWFzdGVyfGltYWdlc3w0MzA0NDN8aW1hZ2UvcG5nfGgwNi9oOGUvMTAzMDQ0NzAyNTM1OTgvMDAyMTAwMjctMTc0OTczLTE3NDk3M18wMS5wbmctMTc0OTczXzAxLnBuZ19zaXplNTE1fDhiMWU2YzIzYmZkYWVmNjMzNTZjMzM2ZGY5NzI1ZjJiNDk1MGFmZWNjODU0YTI1ODExMmVjODNhNmEyZThhZDY"
    ],
    price: 16.999,
    verified: true ,
    verify_code:'',
    available: 12,
},
{
    title:'STROMBERG YARD BLACK HEADPHONES',
    brand:'STROMBERG',
    type: 'HEADPHONES',
    description:{
    Text:"AURICULAR WITH CABLE - UNID. CONTROL 40 MM - SOFT SOFT - DISE?OR PLEGABLE TO KEEP F?CILMENTY - AUX ENTRANCE. 3 5 MM - CABLE LONGITUDE 1 2 M.",
    EAN: 7797026910880,
    Color: "BLACK",
    Guarantee: 6,
    Model: 'YARD',
    Origin: 'CHINA',
    Type: 'VINCHA OVER EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00299076-175886-175886-01.png-175886-01.png-size515?context=bWFzdGVyfGltYWdlc3wzOTM4MjV8aW1hZ2UvcG5nfGg2Zi9oNzYvMTAzMjA4NzkwMjYyMDYvMDAyOTkwNzYtMTc1ODg2LTE3NTg4Nl8wMS5wbmctMTc1ODg2XzAxLnBuZ19zaXplNTE1fDljMzVlNzU0MGUzMmY5YjRlNmJmODM3MmZlNmM2YWE4MDU1NGRhMTc3ZWU4NzIxY2M5OGEzNzE3NjQzNDVlMWY"
    ],
    price: 5.299,
    verified: true ,
    verify_code:'',
    available: 20,
},
{
    title:'PHILIPS TAH4105BK / 00 BLACK HEADPHONES',
    brand:'PHILIPS',
    type: 'HEADPHONES',
    description:{
    Text:"FEEL AS IF YOU FINISHED STOPPING THE DANCE TRACK. THESE SUPRAURAL AURICULARES GIVE YOU A CLEAR SOUND AND SERIOUS POTENTS. THE ACCOLCHED SUJECTOR BAND MAINTS THE COMFORT AND DISEIVES THEM?YOU IN COLOR KILL YOU ALLOW TO APPROPY THE M?SICA WITH A STYLE.",
    EAN: 4895229109681,
    High: '18.5',
    Width: '16.5',
    Weight: '0.153 KG',
    Depth: '4',
    Color: "BLACK",
    Guarantee: 6,
    Model: 'TAH4105BK / 00',
    Origin: 'CHINA',
    Type: 'VINCHA OVER EAR'
    },
    cover_photo:[
    "https://medias.musimundo.com/medias/00307102-176637-176637-01.png-176637-01.png-size515?context=bWFzdGVyfGltYWdlc3w2Nzc5NXxpbWFnZS9wbmd8aGM3L2g4ZS8xMDM3OTc0MTA2OTM0Mi8wMDMwNzEwMi0xNzY2MzctMTc2NjM3XzAxLnBuZy0xNzY2MzdfMDEucG5nX3NpemU1MTV8OTJmYTZkZGQ0OWVlYzYzMTZmN2RhZjAyZjU1MjU1ODE5OGMyODI0MWU4MTRlMTBhZTk5MWQ1ZjY1NzA4MDI5OQ"
    ],
    price: 12.549,
    verified: true ,
    verify_code:'',
    available: 20,
},
{
    title:'Camcorder Video Handycam Sony 4K AX700 Exmor R Sensor',
    brand:'SONY',
    type: 'CAMERAS',
    description:{
    Text:"Capture life as you see it in 4K HDR (HLG)1 images just like in real life. The unrivaled performance of Fast Hybrid AF ensures that autofocus and AF tracking are exceptionally precise, responsive and reliable. You'll enjoy more great photo opportunities of unexpected action, and there are no limits to your filming ambitions with this Handycam®.",
    DigitalZoom: '192x16',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'FDR-AX700',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/73d869fd4090992e153c09a2d37bdde8.jpg.webp",
    "https://images.fravega.com/f300/7275ccca8883c8c063d85303aec0bd0c.jpg.webp",
    "https://images.fravega.com/f300/8e4a0c3a6bd760a5c6a7b342238e86af.jpg.webp"
    ],
    price: 829.999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Camera Digital Mirrorless Sony ILCE 7M3 7miii A7 iii 4K',
    brand:'SONY',
    type: 'CAMERAS',
    description:{
    Text:"The fully renovated sensor and processing system further enhance image quality. The overall performance of the improved automatic focus, continuous capture at high speed up to 10 fps1, 4K2 film recording capacity and significantly improved ease of use compared to a7 II allow more decisive moments to be captured.",
    DigitalZoom: '192x16',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'FRR-6Y43',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/096860d3ca6f6d86d4d0d97edb1a4b03.jpg.webp",
    "https://images.fravega.com/f300/f1f64f0b24259c8ed8da569b9b171a94.jpg.webp",
    "https://images.fravega.com/f300/b31cc4293f0b9c401e7fa3cd2f408277.jpg.webp"
    ],
    price: 799.999,
    verified: true ,
    verify_code:'',
    available: 5,
},
{
    title:'Sony HDR-CX405 Video Camera',
    brand:'SONY',
    type: 'CAMERAS',
    description:{
    Text:"Capture life as you see it in 4K HDR (HLG)1 images just like in real life. The unrivaled performance of Fast Hybrid AF ensures that autofocus and AF tracking are exceptionally precise, responsive and reliable. You'll enjoy more great photo opportunities of unexpected action, and there are no limits to your filming ambitions with this Handycam®.",
    DigitalZoom: '350x',
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'HDR-CX405',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/183a0a288ec9585ad6e3d33b19a18be8.jpg.webp",
    "https://images.fravega.com/f300/561b74d70a37b6f3394b39ef1085df44.jpg.webp",
    "https://images.fravega.com/f300/183a0a288ec9585ad6e3d33b19a18be8.jpg.webp"
    ],
    price: 269.999,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'GoPro HERO9 Black CHDHX901RWB Camera',
    brand:'GoPro',
    type: 'CAMERAS',
    description:{
    Text:"HERO9 Black delivers incredible 5K video and 20MP photos. Add HyperSmooth 3.0 stabilization and powerful features, plus a rugged, waterproof design, and you have more of everything you love. It features a stunning front screen for selfies and rear touchscreen for intuitive control.",
    Connections: 'Micro-USB, Mic jack, LANC jack 2.5mm, HDMI',
    Model: 'HERO9',
    Origin: 'CHINA'
    },
    cover_photo:[
    "https://images.fravega.com/f300/0a8d6d6022e5591e9824aaf000870910.jpg.webp",
    "https://images.fravega.com/f300/a61b9354106bf0727809a80b737989ed.jpg.webp",
    "https://images.fravega.com/f300/1b8055ba2e62c8cd58b4c95e5edafa94.jpg.webp"
    ],
    price: 264.999,
    verified: true ,
    verify_code:'',
    available: 3,
},
{
    title:'HyperX QuadCast S Multi-pattern Condenser Microphone black',
    brand:'HyperX',
    type: 'MICROPHONE',
    description:{
    Text:"Being a condenser, it will enable a clear and fine result. It is ideal for percussion, guitars, pianos, among others. Due to its very defined response to the voice, it is the most chosen by professionals.",
    Model: "HMIQ1S-XX-RG/G",
    Color: "Black",
    Gamer: "Yes",
    CableLength: "3 m",
    BuiltInSpeakers: "Yes",
    Bluetooth: "No",
    Input: "USB",
    Output: "USB",
    LedLight: "Yes",
    Sensitivity: "-36 dB",
    CompatibleDevices: "PC, Mac, PlayStation, Headphones",
    Weight: "254 g"
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_739446-MLA44207269367_112020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_954411-MLA51739377995_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_913813-MLA51739471157_092022-O.webp"
    ],
    price: 109.719,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Noga Mic-st02s Black Streaming Microphone W/ Filter And Tripod',
    brand:'Noga',
    type: 'MICROPHONE',
    description:{
    Text:"High-end microphone ideal for singing, recording and streaming. Omnidirectional, capable of picking up sounds from any direction. Excellent audio processing circuit that guarantees High Fidelity and low distortion. Extended frequency response that improves the resolution of complex acoustic details.",
    Model: "MIC-STO2S",
    Color: "Black",
    Gamer: "Yes",
    CableLength: "1.8 m",
    BuiltInSpeakers: "No",
    Bluetooth: "No",
    Input: "Conector miniplug 3.5mm",
    Output: "Conector miniplug 3.5mm",
    LedLight: "No",
    Sensitivity: "-36 dB",
    CompatibleDevices: "Windows 7 or higher",
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_622441-MLA52178101523_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_982431-MLU70020195357_062023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_764367-MLU70020195359_062023-O.webp"
    ],
    price: 6.590,
    verified: true ,
    verify_code:'',
    available: 15,
},
{
    title:'Razer Seiren Emote Hypercardioid Condenser Microphone Black',
    brand:'Razer',
    type: 'MICROPHONE',
    description:{
    Text:"With the Razer microphone you will discover a new way of capturing and emitting audio. Ideal for various activities. It will give you quality sound and you will get the clarity of the voices.",
    Model: "Seiren Emote",
    Color: "Black",
    Gamer: "Yes",
    BuiltInSpeakers: "Yes",
    Bluetooth: "No",
    Input: "USB",
    Output: "USB",
    LedLight: "Yes",
    Sensitivity: "-20 dB",
    CompatibleDevices: "PC",
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_913446-MLA50865697007_072022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_895807-MLU70065262575_062023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_765617-MLU70065322575_062023-O.webp"
    ],
    price: 118.153,
    verified: true ,
    verify_code:'',
    available: 4,
},
{
    title:'Blue Yeti - Blackout',
    brand:'Blue',
    type: 'MICROPHONE',
    description:{
    Text:"The Blue Yeti multi-pattern blackout condenser microphone is the perfect solution for your recording and communication needs in Argentina. With its sleek and versatile design, this high-quality condenser microphone offers four different polar patterns—omnidirectional, cardioid, bidirectional, and stereo—that let you adapt to any situation, from podcasts and vocal recordings to instruments and interviews.",
    Model: "Yeti",
    Color: "Blackout",
    Gamer: "Yes",
    CableLength: "2 m",
    BuiltInSpeakers: "No",
    Bluetooth: "No",
    Input: "Jack 3.5 mm, USB",
    Output: "Jack 3.5 mm, USB",
    LedLight: "No",
    CompatibleDevices: "PC",
    Weight: "0.55 kg"
    },
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_739446-MLA44207269367_112020-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_954411-MLA51739377995_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_913813-MLA51739471157_092022-O.webp"
    ],
    price: 102.434,
    verified: true ,
    verify_code:'',
    available: 10,
}]

AudioVideo.insertMany(AudioVideos)
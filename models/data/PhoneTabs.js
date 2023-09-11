import PhoneTabs from '../phoneTab.js'
import 'dotenv/config.js'
import '../../config/db.js'

let PhoneTabsData=[{
    title:'Samsung Galaxy A23',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["High-Resolution Camera: A wide-lens camera captures the finest details, making it easy to capture every family gathering; Plus, Advanced Portrait Mode ups your photo game by automatically focusing on people and blurring the background.",
    "Long-lasting battery: Whether you're taking a video call on your commute, catching up on your favorite show, or connecting with friends and family, your super-fast-charging, long-lasting battery",
    "Powerful performance: Galaxy A23 5G's powerful processor keeps your day running smoothly; load your favorite apps at blazing speeds for non-stop fun and unlock new levels of gaming with 5G with virtually no lag",
    "Modern Design: A slim and beautiful design, with a compact camera, eliminates unnecessary bulk, plus a Gorilla Glass 5 display gives this sleek phone an extra level of toughness"
],
    Screen:"6.6-inch",
    Processor:"Snapdragon 695",
    OperatingSystem:"Android 12 OneUI 4.1",
    Storage:"RAM: 4GB / Internal storage: 128GB / SD: 1TB(Expandable)",
    Camera:"Rear: 50 Mpx / front: 8 Mpx ",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:"5,000 mAh",
    Color:"Black"
    }, 
    cover_photo:[
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206874?$1300_1038_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206858?$684_547_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206859?$684_547_PNG$"
],
    price: 279,
    Moreview: true,
    available: 4,
},
{
    title:'Samsung Galaxy A04',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["Long-lasting batteries: The Galaxy A04s smartphone has the power of 5,000 mAh that you can trust, you will be ready for any moment; and 7.75W charging gives you the power to shoot whenever you need it",
    "Reliable performance: The Galaxy A04s was designed with processing speed and reliable processing power in mind for easy downloading, streaming and sharing.",
    "Versatile camera experience: From photos of your culinary masterpieces and everyday adventures to family movies, the Galaxy A04s gives you a multi-lens camera to capture those impressive moments in life.",
    "Modern design: As one of our most affordable A-series phones, the Galaxy A04s is simple and durable; and its finger sensor on one side adds a personal touch to security"
], //Aca podrias acceder por keys [0],[1] para mostrar una descripcion por lista como por ejemplo puntos o numeros.
    Screen:"6,5-inch",
    Processor:"Snapdragon 695",
    OperatingSystem:"Android 12 One UI Core 4.1",
    Storage:"RAM:4GB  / Internal storage:64GB  / SD: 1TB(Expandable)",
    Camera:"Rear:50Mpx  / front:5Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5,000mAh",
    Color:"Deep green"
    }, 
    cover_photo:[
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a045mzgearo/gallery/ar-galaxy-a04-sm-a045-sm-a045mzgearo-534153841?$2052_1641_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a235mzkearo/gallery/ar-galaxy-a23-sm-a235-sm-a235mzkearo-532206858?$684_547_PNG$",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a045mzgearo/gallery/ar-galaxy-a04-sm-a045-sm-a045mzgearo-534153827?$684_547_PNG$"
],
    price: 170,
    Moreview: false,
    available: 3,
},
{
    title:'Samsung Galaxy S22',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["Super Steady 8K Video: Record videos that rival how epic your life is with stunning 8K recording, the highest recording resolution available on a smartphone; Video capture is effortless thanks to autofocus video stabilization on the Galaxy S22",
    "Night Photography + Handheld Mode: Capture the night with bright, clear images and video, no matter the lighting with Night Mode; Portrait mode automatically detects and snaps to whatever you want front and center, making all your photos frame-worthy",
    "High-quality design and craftsmanship: With a sleek and eye-catching metal and glass glass design, we're setting a standard for smartphones; Featuring our strongest aluminum frame and the latest in Gorilla Glass, this phone is lightweight and durable to help withstand scratches and dings.",
    "Adaptive Color Contrast: Streaming on the go, working from your backyard, or binge-watching late into the night? Galaxy S22 adaptive display automatically optimizes color and brightness, outdoors and indoors"
], 
    Screen:"6,1-inch",
    Processor:"Samsung Exynos 2200 8 cores",
    OperatingSystem:"Android 12 One UI 4.1",
    Storage:"RAM: 8 GB / Internal storage:160GB  / SD: 1TB(Expandable)",
    Camera:"Rear:50Mpx  / front:10Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3590mAh",
    Color:"Pink"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61jAwWf6GYL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41qPcTaKIwL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51bpy9qzM9L._AC_SX679_.jpg"
],
    price: 330 ,
    Moreview: true,
    available: 5,
},
{
    title:'Samsung Galaxy S20',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["Professional Camera: The new Samsung Galaxy S20 FE mobile phone features high-powered professional lenses for beautiful portraits, stunning landscapes and sharp close-ups in any light with its 3x optical zoom",
    "5g power: Get next-level power for everything you love to do with Samsung Galaxy 5G; more sharing, more games, more experiences and never miss a beat",
    "Zoom de espacio de 30 aumentos: si quieres que tu teléfono celular se acerque desde lejos o aumente los detalles de algo cercano, el zoom de 30 x te da la potencia para acercarte",
    "Modo noche: captura imágenes nítidas y vídeo vibrante con modo nocturno y crea contenido de alta calidad en poca luz, no requiere flash con este smartphone"
], 
    Screen:"6,5-inch",
    Processor:"Exynos 990 Octa-Core",
    OperatingSystem:"Android 10.0",
    Storage:"RAM:8GB  / Internal storage: 256GB  / SD: 1TB(Expandable)",
    Camera:"Rear:64Mpx  / front:40Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3880mAh",
    Color:"Cloud red"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/81Yz+3Qqq5L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61XZl0Wi7hL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61Jv7HNgcnL._AC_SX679_.jpg"
],
    price: 650,
    Moreview: true,
    available: 2,
},
{
    title:'Samsung Galaxy Z Flip 3',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["Flex Your Best Angle: With Flex mode, simply unfold your cell phone screen to your best angle for hands-free photos and video calls; choose what you want to capture, set it up, go back and take your best shot.",
    "A camera that stays put: Thanks to Samsung Galaxy Z Flip3's Super Steady feature, you can simply set it up and strike a pose for perfect selfies.",
    "Ultra compact, ultra awesome: Show off your style without compromise; With a compact design that folds out, you don't have to resize your screen for your favorite outfit.",
    "All your notifications, from head to toe: Control your cell phone, even when it's folded shut; Galaxy Z Flip3 notifies you on the screen on the outer cover, so you can see notifications and check the weather."
], 
    Screen:"6,7-inch",
    Processor:"Snapdragon 888",
    OperatingSystem:"Android 11.0",
    Storage:"RAM:8GB  / Internal storage:256 GB  / SD: 1TB(Expandable)",
    Camera:"Rear:12Mpx  / front:10Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.300mAh",
    Color:"Black"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61Zw97IYF2L._AC_SY879_.jpg",
    "https://m.media-amazon.com/images/I/41CYpzvgDFL._AC_SY879_.jpg"
],
    price: 845,
    Moreview: false,
    available: 3,
},
{
    title:'Samsung Galaxy Z Flip 4',
    brand:'Samsung',
    type: 'Phones',
    description:{
    Text:["Capture on one screen, text on the other: Catch up with friends at the top and find the perfect image to post at the bottom; flexible mode makes doing two things at once a breeze",
    "Never miss a notification: Galaxy Z Flip4's customizable cover display lets you see just what you need while keeping your entire screen private; respond to texts, skip songs and change settings, all while keeping your cell phone comfortably compact",
    "POCKET-PERFECT SIZE: Ditch the bag and travel light; The compact, foldable design lets you say goodbye to bulk without sacrificing a big screen. slide your smartphone easily even in your front pocket",
    "Mantente sincronizado: mantente al día de las notificaciones o rastrea tu entrenamiento directamente en tu muñeca; el Galaxy Z Flip4 se sincroniza fácilmente con tu Galaxy Watch, y con una variedad de opciones de color, puedes obtener uno para que coincida con tu vibración"
], 
    Screen:"6,7-inch",
    Processor:"Snapdragon 8+ Gen 1",
    OperatingSystem:"Android 12.0",
    Storage:"RAM: 8GB / Internal storage: 256GB / SD: 1TB(Expandable)",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.700mAh",
    Color:"Bora purple"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/517PxzJ-fUL._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/61jqaN-jq7L._AC_SX466_.jpg",
    "https://m.media-amazon.com/images/I/71tkKd28TfL._AC_SX466_.jpg"
],
    price: 999 ,
    Moreview: true,
    available: 1,
},
{
    title:'Iphone 11',
    brand:'Apple',
    type: 'Phones',
    description:{
    Text:["Enjoy true colors in photos, videos and games with the 6.1-inch Liquid Retina display",
    "Harness unprecedented performance in gaming, augmented reality, and photography with the A13 Bionic chip. Do much more without having to recharge your phone thanks to its long-lasting battery.",
    "Shoot 4K video and capture stunning portraits and stunning landscapes with the dual-camera system. Take great photos in low light thanks to Night mode.",
    "Don't worry if it gets wet, iPhone 11 is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"6,06-inch",
    Processor:"A13 Bionic",
    OperatingSystem:"iOS 13",
    Storage:"RAM: 4GB  / Internal storage: 128GB",
    Camera:"Rear:12Mpx  / front:12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.110mAh",
    Color:"Space gray"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41cBBax9BkS._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/714B1PaGorL._AC_SX679_.jpg"
],
    price: 649,
    Moreview: true,
    available: 2,
},
{
    title:'Iphone 13 PRO',
    brand:'Apple',
    type: 'Phones',
    description:{
    Text:["Super Retina XDR display with ProMotion for faster, smoother response.",
    "New 12MP Pro camera system (telephoto, wide and ultra-wide), LiDAR scanner, 6x optical zoom range, macro photography, Photo Styles, ProRes2 video, Smart HDR 4, Night mode, Apple ProRAW and video recording 4K HDR video in Dolby Vision",
    "Cinema mode with shallow depth of field and automatic focus changes in your videos",
    "Don't worry if it gets wet, iPhone 13 PRO is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"5,4-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iOS 15",
    Storage:"RAM: 6GB  / Internal storage: 512 GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3240mAh",
    Color:"Gold"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/71k0zz+8paL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/7161nwSVX9L._AC_SX679_.jpg"
],
    price: 1399,
    Moreview: true,
    available: 4,
},
{
    title:'Iphone 14',
    brand:'Apple',
    type: 'Phones',
    description:{
    Text:["6.1-inch Super Retina XDR always-on display with ProMotion technology",
    "Action mode for steady video, even handheld.",
    "Cinema mode now in 4K Dolby Vision at up to 30fps, Action mode for steady video, even handheld, and Crash Detection, a safety feature that calls for help when you can't.",
    "Don't worry if it gets wet, iPhone 14 is water resistant for up to 30 minutes to a maximum depth of 2 meters."
], 
    Screen:"6,1-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iOS 16",
    Storage:"RAM: 6GB / Internal storage: 128GB ",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 3.279mAh",
    Color:"Space purple"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_726811-MLM51559388195_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_924351-MLM51559388197_092022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_908818-MLM51559388192_092022-O.webp"
],
    price: 900,
    Moreview: false,
    available: 1,
},
{
    title:'Xiaomi 12T Pro',
    brand:'Xiaomi',
    type: 'Phones',
    description:{
    Text:["The Xiaomi 12 Pro is the true flagship of the Xiaomi 12 series. With a 6.73-inch LTPO AMOLED screen at 1440p resolution and 120Hz refresh rate, the Xiaomi 12 Pro is powered by a Qualcomm Snapdragon 8 Gen 1 processor",
    "On the back of the Xiaomi 12 Pro we find a set of three 50MP cameras, wide, ultrawide and telephoto, respectively, while the selfie camera is 32MP.",
    "A 4600 mAh battery with 120W fast charging and compatible with wireless charging powers the Xiaomi 12 Pro, which completes its features with stereo speakers optimized by Harman Kardon",
], 
    Screen:"6,67-inch",
    Processor:"Qualcomm Snapdragon 8+ Gen 1",
    OperatingSystem:"MIUI 13 based on Android 12",
    Storage:"RAM: 8 GB  / Internal storage: 256GB",
    Camera:"Rear: 50Mpx  / front: 32Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"YES",
    Batery:" 5.000mAh",
    Color:"Blue marine"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61nw70YJQhL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41UNlRcdiaL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/51bXZXdQlgL._AC_SX679_.jpg"
],
    price: 500,
    Moreview: true,
    available: 6,
},
{
    title:'Xiaomi Redmi Note 11',
    brand:'Xiaomi',
    type: 'Phones',
    description:{
    Text:["Professional photography in your pocket Discover endless possibilities for your photos with the 4 main cameras of your team. Put your creativity to the test and play with lighting, different planes and effects to get great results.",
    "Amazing viewing experience Watch your favorite series and movies in the best definition through its 6.43 inch AMOLED screen.Enjoy brilliant colors and precise details in all your content.",
    "Higher performance Its 4 GB RAM memory allows your smartphone to work smoothly and without delays when performing different tasks, playing games or browsing",
    "Superior battery life Unplug! With the 5000 mAh super battery you will have energy for much longer to play, watch series or work without the need to recharge."
], 
    Screen:"6.43-inch",
    Processor:" Snapdragon 680 Octa-Core",
    OperatingSystem:"Android 11",
    Storage:"RAM: 4GB / Internal storage: 128 GB ",
    Camera:"Rear: 50Mpx  / front: 13Mpx",
    Connectivity:"4G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5000mAh",
    Color:"Gray"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61mHMiZyW2L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41F0O3dOn+L._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/413Eb+YF-UL._AC_SX679_.jpg"
],
    price: 180,
    Moreview: false,
    available: 2,
},
{
    title:'Xiaomi POCO F4',
    brand:'Xiaomi',
    type: 'Phones',
    description:{
    Text:["Professional photography in your pocket Discover endless possibilities for your photos with the 3 main cameras of your team. Put your creativity to the test and play with lighting, different planes and effects to get great results.",
    "Incredible visual experience Watch your favorite series and movies in the best definition through its 6.67 inch AMOLED screen. Enjoy brilliant colors and precise details in all your content.",
    "capacity and efficiency With its powerful processor and 8 GB RAM, your device will achieve high performance with high speed content transmission and will run multiple applications at the same time without delays.",
    "Superior battery life Unplug! With the 4500 mAh super battery you will have energy for much longer to play, watch series or work without the need to recharge."
], 
    Screen:"6,67-inch",
    Processor:"Snapdragon 870 5G Octa-Core",
    OperatingSystem:"MIUI 13 + POCO Launcher Android 12",
    Storage:"RAM: 8GB / Internal storage: 256GB / SD: 1TB(Expandable)",
    Camera:"Rear: 64Mpx  / front: 20Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 4500mAh",
    Color:"Nebula green"
    }, 
    cover_photo:[
    "https://m.media-amazon.com/images/I/61bs38Hj6uL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/519RSDhDQPL._AC_SX679_.jpg",
    "https://m.media-amazon.com/images/I/41wl4buY7ML._AC_SX679_.jpg"
],
    price: 400,
    Moreview: false,
    available: 2,
},
{
    title:'Samsung Galaxy Tab A8',
    brand:'Samsung',
    type: 'Tabs',
    description:{
    Text:["Enjoy an incredible multimedia experience with the 10.5-inch Samsung Galaxy Tab A A8 Tablet with 64GB of storage in elegant dark gray color. With its powerful 2GHz Octa-Core processor and 4GB of RAM, you'll be able to browse, watch movies and play games without interruption. The high-resolution multi-touch screen (1920x1200 px) gives you sharp images and vibrant colors, while the Android operating system gives you access to thousands of applications and features.",
    "Capture your favorite moments with the 8MP rear camera and make video calls with the 5MP front camera. Face unlock gives you security and convenience when accessing your tablet. And if you need more space, you can expand the memory up to 1TB with a microSD card.",
    "With sensors such as accelerometer, gyroscope, geomagnetic sensor, hall sensor and ambient light sensor, the Samsung Galaxy Tab A A8 adapts to your needs and offers you a complete user experience. Don't wait any longer to enjoy everything this tablet has to offer you.",
    "Wi-Fi, Bluetooth 5 and USB 2.0 connectivity let you easily share files and connect to other devices. In addition, it has GPS so you can use map and navigation applications. The 7040 mAh battery guarantees hours of use without worrying about recharging."
], 
    Screen:"10,5-inch",
    Processor:"Octa core 8",
    OperatingSystem:"Android One UI 3.1",
    Storage:"RAM: 4GB  / Internal storage: 64GB / MicroSD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7040mAh",
    Color:"Dark gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_769517-MLU69480556546_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_715518-MLA52231136904_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_975447-MLA52231136906_112022-O.webp",
    
],
    price: 230,
    Moreview: true,
    available: 3,
},
{
    title:'Samsung Galaxy Tab S6',
    brand:'Samsung',
    type: 'Tabs',
    description:{
    Text:["Enjoy an unbeatable experience with the Samsung Galaxy Tab S S6 Lite Tablet, perfect for your entertainment and productivity needs. Its elegant design in oxford gray color and 10.4-inch screen allow you to enjoy your favorite movies, series and games with amazing image quality. Thanks to its Android 12.0 operating system and its powerful Octa-Core Qualcomm Kyro 465 processor, you can run multiple applications smoothly and quickly.",
    "With 4GB of RAM and 64GB of capacity, you'll have enough space to store your files, photos, and videos. Also, you can expand its capacity up to 1TB with a memory card. Wi-Fi, Bluetooth and GPS connectivity will keep you always connected and located at all times",
    "Capture your best moments with its 8 Mpx rear camera and make clear video calls with its 5 Mpx front camera. Face unlock gives you security and convenience when accessing your device. The 7040 mAh battery guarantees up to 14-15 hours of continuous use, so you can enjoy your activities without worrying about charging.",
    "The Samsung Galaxy Tab S S6 Lite is the ideal companion for your daily tasks, studies or moments of leisure. Do not wait any longer and take with you this incredible tablet that offers you the best in technology and performance."
], 
    Screen:"10,4-inch",
    Processor:"Qualcomm Adreno 618",
    OperatingSystem:"Android 12",
    Storage:"RAM: 4GB / Internal storage: 64GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7040mAh",
    Color:"Oxford gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_792285-MLA53362598654_012023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_854451-MLA53362598656_012023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_935715-MLA53362587943_012023-O.webp"
],
    price: 250,
    Moreview: true,
    available: 5,
},
{
    title:'Samsung Galaxy Tab A7 Lite',
    brand:'Samsung',
    type: 'Tabs',
    description:{
    Text:["This Samsung tablet is the ideal companion, with plenty of capacity for each of your activities. The slim, compact and portable design, easy to hold in one hand, makes it a perfect combination of performance and versatility.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its wi-fi, wi-fi direct, bluetooth, usb-c connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 8 Mpx and 2 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"8,7-inch",
    Processor:"Octa-Core Cortex-A53",
    OperatingSystem:"Android 11",
    Storage:"RAM: 3GB  / Internal storage: 32GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 5Mpx",
    Connectivity:"5G / Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 5100mAh",
    Color:"Silver"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_639004-MLU69482268920_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_781852-MLU69482229834_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_785045-MLU69762392813_062023-O.webp"
],
    price: 200,
    Moreview: false,
    available: 3,
},
{
    title:'iPad mini (6ª generación)',
    brand:'Apple',
    type: 'Tabs',
    description:{
    Text:["The new iPad mini features an 8.3-inch Liquid Retina display with an edge-to-edge design and the powerful A15 Bionic chip with Neural Engine. In addition, it has a 12 MP ultra-wide-angle front camera with Center Framing and USB-C connectivity.",
    "Take notes, annotate documents, and bring your best ideas to life with Apple Pencil (2nd generation), which attaches magnetically to iPad mini and charges wirelessly.",
    ], 
    Screen:"8,3-inch",
    Processor:"A15 Bionic",
    OperatingSystem:"iPadOS 15",
    Storage:"RAM: 4GB  / Internal storage: 64GB",
    Camera:"Rear: 12Mpx  / front: 10Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 6000mAh",
    Color:"Space gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_972576-MLU69482475786_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_874989-MLU69494751787_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_752447-MLU69482273876_052023-O.webp"
],
    price: 431,
    Moreview: false,
    available: 1,
},
{
    title:' iPad Air (5ª generación)',
    brand:'Apple',
    type: 'Tabs',
    description:{
    Text:["iPad Air has a stunning 10.9-inch Liquid Retina display and Apple's super-powerful M1 chip so you can unleash your creativity and play without limits wherever you go. It comes with Touch ID, advanced cameras, USB-C and Wi-Fi 6 connections. In addition, it is compatible with the Magic Keyboard and Apple Pencil (2nd generation).",
    ], 
    Screen:"10,9-inch",
    Processor:"Octa-Core",
    OperatingSystem:"iPadOS 15",
    Storage:"RAM: 8GB / Internal storage: 256GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7729mAh",
    Color:"Blue"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_707342-MLA52222796949_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_981611-MLA52222798940_102022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_883535-MLA52222798941_102022-O.webp"
],
    price: 520,
    Moreview: true,
    available: 2,
},
{
    title:' iPad 10 Gen 10.9',
    brand:'Apple',
    type: 'Tabs',
    description:{
    Text:["This product combines the power and capability of a computer with the versatility and ease of use that only an iPad can provide. Multitasking, such as editing documents while searching for information on the Internet or taking a selfie, is extremely easy. As if this were not enough, it also offers the possibility of downloading from the App Store hundreds of applications created for painting, drawing, listening to music and much more!",
], 
    Screen:"10,9-inch",
    Processor:"A14 Bionic",
    OperatingSystem:"Ipad OS15",
    Storage:"RAM: 6GB/ Internal storage: 64GB",
    Camera:"Rear: 12Mpx  / front: 12Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 7730mAh",
    Color:"Silver"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_618299-MLA52880503434_122022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_944048-MLA52622269475_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_992503-MLA52178284465_102022-O.webp"
],
    price: 450,
    Moreview: true,
    available: 3,
},
{
    title:'Lenovo Tab P11 ',
    brand:'Lenovo',
    type: 'Tabs',
    description:{
    Text:["This tablet is the perfect combination of performance and versatility, ideal to accompany each of your activities.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its pogo pin, usb-c, wi-fi, wi-fi direct, wi-fi display, bluetooth, otg connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 13 Mpx and 8 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"11-inch",
    Processor:"Octa-Core Qualcomm Kryo 260",
    OperatingSystem:"Android 10",
    Storage:"RAM: 4GB / Internal storage: 64GB / SD: 1TB(Expandable)",
    Camera:"Rear: 13Mpx  / front: 5Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:"7500mAh",
    Color:"Gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_856313-MLU69494750749_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_648185-MLU69494750753_052023-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_669544-MLU69494909745_052023-O.webp"
],
    price: 210,
    Moreview: false,
    available: 5,
},
{
    title:'Xiaomi Redmi Pad',
    brand:'Xiaomi',
    type: 'Tabs',
    description:{
    Text:["This tablet is the perfect combination of performance and versatility, ideal to accompany each of your activities.",
    "Transferring, synchronizing and accessing your devices as many times as you want is now possible. Its bluetooth, wi-fi, usb-c, and wi-fi direct connections allow you to maximize its functions.",
    "Capture all your moments instantly Thanks to its cameras, with 8 Mpx and 8 Mpx resolutions, you can make video calls or take photos anytime, anywhere, with excellent image quality. Sharpness, brightness and vibrant colors will make your experiences optimally reflected.",
    ], 
    Screen:"10,61-inch",
    Processor:"Dual-Core Cortex-A76",
    OperatingSystem:"Android 12",
    Storage:"RAM: 6GB / Internal storage: 128GB / SD: 1TB(Expandable)",
    Camera:"Rear: 8Mpx  / front: 8Mpx",
    Connectivity:"Bluetoh / Wi-Fi",
    NFC:"NO",
    Batery:" 8000mAh",
    Color:"Graphite gray"
    }, 
    cover_photo:[
    "https://http2.mlstatic.com/D_NQ_NP_970963-MLA52579617825_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_993286-MLA52579644086_112022-O.webp",
    "https://http2.mlstatic.com/D_NQ_NP_857769-MLA52579644081_112022-O.webp"
],
    price: 208,
    Moreview: true,
    available: 5,
},
]
PhoneTabs.insertMany(PhoneTabsData)
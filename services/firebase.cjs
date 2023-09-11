let admin = require("firebase-admin");
let serviceAccount = require("../firebase-key.json")
const { date } = require("joi")

//en el BUCKET se guarda la direccion del Storage de Firebase.
const BUCKET = "proyecto-final-74084.appspot.com"

//inicializa la aplicación de Firebase en el backend.
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
    if (!req.file) return next();
    const imagen = req.file
    const folderName = "Profile-Picture";
    const nameImagen = folderName + "/" + Date.now() + "." + imagen.originalname.split('.').pop();

    const file = bucket.file(nameImagen);

    const stream = file.createWriteStream({
        metadata: {
            contentType: imagen.mimetype,
        }
    })

    stream.on("error", (e) => {
        console.error(e);
    });

    stream.on("finish", async () => {
        await file.makePublic();

        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameImagen}`;

        next();
    });

    stream.end(imagen.buffer);
}

// const uploadImageCoverFhoto = (req, res, next) => {
//     if (!req.file) return next();
//     const imagen = req.file
//     const folderName = "cover_photo";
//     const nameImagen = folderName + "/" + Date.now() + "." + imagen.originalname.split('.').pop();

//     const file = bucket.file(nameImagen);

//     const stream = file.createWriteStream({
//         metadata: {
//             contentType: imagen.mimetype,
//         }
//     })

//     stream.on("error", (e) => {
//         console.error(e);
//     });

//     stream.on("finish", async () => {
//         await file.makePublic();

//         req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameImagen}`;

//         next();
//     });

//     stream.end(imagen.buffer);
// }
module.exports = {uploadImage, /*uploadImageCoverFhoto*/};

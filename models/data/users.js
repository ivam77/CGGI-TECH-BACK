import User from "../User.js"
import 'dotenv/config.js'
import '../../config/db.js'

let users = [{
    email: "gustavo@cggi.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Argentina",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://i.postimg.cc/fyJsspq8/image.png"
},{
    email: "carlos@cggi.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Colombia",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://i.postimg.cc/GhdNvZxV/5831a17a290077c646a48c4db78a81bb-icono-de-perfil-de-usuario-azul.png"
},{
    email: "ivan@cggi.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Argentina",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
},{
    email: "gabriela@cggi.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Argentina",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://i.postimg.cc/7Yj2FytQ/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png"
},{
    name: "victor",
    surnames: "cabrera",
    email: "victorcabrera@cggi.com",
    password: "$2a$10$XZBDuOYHcHSzZNzf2ws7Quvu3YmKgSagWRUG1eGlBLSdxJunpN1LC",
    location: "Argentina",
    role: 2,
    verified: true,
    verify_code: "acvnewi92emodsqisj129mxskal2121wsaz",
    online: false,
    photo: "https://i.postimg.cc/7Yj2FytQ/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-persona.png"
}]

User.insertMany(users)

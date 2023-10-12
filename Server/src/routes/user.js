const express = require('express');
const routerUser = express.Router();

const {userGet,userPost,userUpdate,userDelete} = require('../handlers/useUser')


routerUser.post("/get", userGet);
routerUser.post("/create", userPost);
routerUser.put("/update", userUpdate);
routerUser.delete("/delete", userDelete);


module.exports = routerUser
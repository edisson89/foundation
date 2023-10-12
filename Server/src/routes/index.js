const { Router } = require("express");
const router = Router();
const routerUser = require("./user");

router.use("/user",routerUser);

module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastosController_1 = require("../controllers/gastosController");
const router = (0, express_1.Router)();
router.post("/", gastosController_1.createGasto);
exports.default = router;

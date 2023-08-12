"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Esto es un middleware que transforma la req.body a un json (los endPOits que envio a la app se transforman automáticamente, para no hacerlo de manera manual)
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!!');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

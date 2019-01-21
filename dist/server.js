"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const Routes_1 = __importDefault(require("./routes/Routes"));
const app = express_1.default();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan_1.default('dev'));
app.use('/api/v1/', Routes_1.default);
app.listen(3000, () => {
    console.log('App listening on port 3000');
});
//# sourceMappingURL=server.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const db_1 = __importDefault(require("./config/db"));
const textController_1 = __importDefault(require("./controllers/text/textController"));
const userController_1 = __importDefault(require("./controllers/user/userController"));
// import formController from "./controllers/form/formController";
// import centerController from "./controllers/center/centerController";
const errorHandler_1 = require("./middleware/errorHandler");
const notFound_1 = require("./middleware/notFound");
// import campaignController from "./controllers/campaign/campaignController";
// //Initial configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.default)();
const PORT = Number(process.env.PORT) || 5001;
// //Middleware
app.use((0, helmet_1.default)()); //Helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use((0, cors_1.default)()); //enables cors
app.use((0, morgan_1.default)("dev")); //logger for the request
app.use(express_1.default.json()); // parse and convert request body to JSON (for PUT/PATCH and POST method)
app.use(express_1.default.urlencoded({ extended: true })); // the same as express.json(), but, it also converts FORM-DATA to JSON
//CONTROLLERS
app.use("/api/texts", textController_1.default);
app.use("/api/users", userController_1.default);
// app.use("/api/forms", formController);
// app.use("/api/centers", centerController);
// app.use("/api/campaigns", campaignController);
//SERVER
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});
app.use(errorHandler_1.errorHandler); //Error handling
app.use(notFound_1.notFoundHandler); //404

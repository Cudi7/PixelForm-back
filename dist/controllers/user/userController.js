"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../../persistance/users");
const route = express_1.default.Router();
//GET all users -> /
route.get("/", async (req, res) => {
    const users = await (0, users_1.getUsers)();
    return users.success
        ? res.status(users.status).json(users)
        : res.status(users.status).json(users);
});
//GET users by id -> users/:id
// route.get("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const user = await getUserById(id);
//   return user.success ? res.status(200).json(user) : res.status(400).json(user);
// });
// POST new user -> users/new
route.post("/new", async (req, res) => {
    const newUser = await (0, users_1.addUser)(req.body);
    const { success } = newUser;
    return res.status(success ? 200 : 400).json(newUser);
});
//UPDATE user -> users/update/:id
route.patch("/update", async (req, res) => {
    const updatedUser = await (0, users_1.updateUser)(req.body);
    return updatedUser.success
        ? res.status(200).json(updatedUser)
        : res.status(400).json(updatedUser);
});
//DELETE MANY users -> users/delete/
route.delete("/delete", async (req, res) => {
    const idArray = req.body;
    const deletedUsers = await (0, users_1.deleteUsers)(idArray);
    return deletedUsers.success
        ? res.status(200).json(deletedUsers)
        : res.status(400).json(deletedUsers);
});
exports.default = route;

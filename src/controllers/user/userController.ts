import app, { Request, Response } from "express";
import {
  addUser,
  deleteUsers,
  // getUserById,
  getUsers,
  updateUser,
} from "../../persistance/users";

const route = app.Router();

//GET all users -> /
route.get("/", async (req: Request, res: Response) => {
  const users = await getUsers();

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
route.post("/new", async (req: Request, res: Response) => {
  const newUser = await addUser(req.body);

  const { success } = newUser;

  return res.status(success ? 200 : 400).json(newUser);
});

//UPDATE user -> users/update/:id
route.patch("/update", async (req: Request, res: Response) => {
  const updatedUser = await updateUser(req.body);

  return updatedUser.success
    ? res.status(200).json(updatedUser)
    : res.status(400).json(updatedUser);
});

//DELETE MANY users -> users/delete/
route.delete("/delete", async (req: Request, res: Response) => {
  const idArray = req.body;

  const deletedUsers = await deleteUsers(idArray);

  return deletedUsers.success
    ? res.status(200).json(deletedUsers)
    : res.status(400).json(deletedUsers);
});

export default route;

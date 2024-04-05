class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = (req, res) => res.status(201).send(this.userService.addUser(req.body));

  getUsers = async (_, res) => res.status(200).send(await this.userService.getUsers());

  getUser = async (req, res) => {
    const { id } = req.params;
    return res.status(200).send(await this.userService.getUser(id));
  };
}

export default UserController;

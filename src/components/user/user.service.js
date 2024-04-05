import User from './user.model.js';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  addUser = async (user) => {
    const newUser = await User.create({
      email: user.email,
      password: user.password,
      age: user.age,
    });
    return newUser;
  };

  // eslint-disable-next-line class-methods-use-this
  getUsers = async () => {
    const users = await User.find();
    return users;
  };

  // eslint-disable-next-line class-methods-use-this
  getUser = async (id) => {
    const user = await User.findOne({ _id: id });
    return user;
  };

  // eslint-disable-next-line class-methods-use-this
  editUser = async (id, user) => {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, user, { new: true });
    return updatedUser;
  };

  // eslint-disable-next-line class-methods-use-this
  deleteUser = async (id) => {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    return deletedUser;
  };
}

export default UserService;

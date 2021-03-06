const UserRepository = require('../repositories/UserRepository');
const NotFound = require('../errors/NotFound');

class UserService {
  async findAll({ offset, limit }) {
    return await UserRepository.getAll(offset, limit);
  }

  async findByFilter({ offset, limit, ...filter }) {
    return await UserRepository.getByFilter(offset, limit, filter);
  }

  async findById(id) {
    const user = await UserRepository.getById(id);
    return user;
  }

  async create(user) {
    return await UserRepository.create(user);
  }

  async update(id, userData) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFound('User');
    }
    return await UserRepository.update(id, userData);
  }

  async delete(id) {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFound('User');
    }
    return await UserRepository.delete(id);
  }
}

module.exports = new UserService();

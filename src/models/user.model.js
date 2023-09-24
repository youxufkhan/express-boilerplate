const BaseModel = require("./base.model");

class UserModel extends BaseModel {
  static table = 'users'; // Define the table property for UserModel

}

module.exports = UserModel;
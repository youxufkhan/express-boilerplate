const db = require('../adapters/db')

class BaseModel {
    static table ; // Define the table property for UserModel
    static async getAll() {
      return db(this.table);
    }
  
    static async getById(id) {
      return db(this.table).where({ id }).first();
    }
  
    static async create(model) {
      return db(this.table).insert(model).returning('*');
    }
  
    static async update(id, updatedModel) {
      return db(this.table).where({ id }).update(updatedModel).returning('*');
    }
  
    static async delete(id) {
      return db(this.table).where({ id }).del();
    }
  }

module.exports = BaseModel;
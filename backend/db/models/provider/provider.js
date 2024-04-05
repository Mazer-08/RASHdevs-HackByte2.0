import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../connection.js";
import bcrypt from "bcrypt";

// Some values are set to allowNull: true for testing purposes. Change them to false later.

// import Register from "./registerEvents.js";
// import Bookmark from "./bookmarkEvents.js";

class Provider extends Model {}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        try {
          let salt = bcrypt.genSaltSync(10);
          let hash = bcrypt.hashSync(value, salt);
          this.setDataValue("password", hash);
        } catch (err) {
          throw new Error(err);
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    domain: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "providers",
    tableName: "providers",
  }
);

export default Provider;

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
// import bcrypt from "bcrypt";

// Some values are set to allowNull: true for testing purposes. Change them to false later.

class Request extends Model {}

Request.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "accepted", "rejected"),
      defaultValue: "pending",
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "requests",
    tableName: "requests",
  }
);

export default Request;

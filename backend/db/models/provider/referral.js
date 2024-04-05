import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../connection.js";
// import bcrypt from "bcrypt";

// Some values are set to allowNull: true for testing purposes. Change them to false later.

// import Register from "./registerEvents.js";
// import Bookmark from "./bookmarkEvents.js";

class Referral extends Model {}

Referral.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    officialLink: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    availableCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    details: {
      type: DataTypes.TEXT,
      // allowNull: false,
      allowNull: true,
    },
    expiryDate: {
      type: DataTypes.DATE,
      // allowNull: false,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "referrals",
    tableName: "referrals",
  }
);

export default Referral;

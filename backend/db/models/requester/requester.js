import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../connection.js";
import bcrypt from "bcrypt";

class Requester extends Model {}

Requester.init(
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
    clgName: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    passingYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    workExp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cvLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Requesters",
    tableName: "Requesters",
  }
);

export default Requester;

import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  try {
    await db.sync();

    await db.queryInterface.addColumn("users", "address", {
      type: DataTypes.STRING,
      allowNull: true,
    });

    console.log("Database synchronized successfully with the new column");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
})();

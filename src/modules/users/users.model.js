import { DataTypes } from "sequelize"
import {sequelize} from "./../../config/database/database.js"
import { encryptedPassword } from "../../config/plugins/encripted-password.js"


const User = sequelize.define( "users",{
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM("client", "employee"),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("available","disabled"),
        allowNull: false,
        defaultValue: "available"
    },
},
{
    hooks: {
      beforeCreate: async (user) => {
        user.password = await encryptedPassword(user.password)
      },
    },
  }

)

export default User
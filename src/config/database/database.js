import { Sequelize } from "sequelize"
import { envs } from "../enviroments/enviroments.js"

export const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})

export const authenticated = async() => {
    try{
        await sequelize.authenticate()
        console.log("Connection ok!...XD")
    } catch (error) {
        console.error(error)
    }
}

export const syncUp = async() => {
    try {
        await sequelize.sync({force: true})
        console.log("Synced ok!...XD")
    }  catch (error) {
        console.error(error)
    }
}
import { DataTypes, Model, QueryInterface } from "sequelize";
import User from "../../interfaces/User";

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<User>>('users', {
            id: {
                type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
            },
            email: {
                type: DataTypes.STRING, unique: true, allowNull: false,
            },
            password: {
                type: DataTypes.STRING(25), allowNull: false
            }
        })
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('users');
    },
}
import { DataTypes, Model, QueryInterface } from "sequelize";
import Recipe from "../../interfaces/Recipe";

export default {
    up(queryInterface: QueryInterface) {
        return queryInterface.createTable<Model<Recipe>>('recipes', {
            id: {
                type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
            },
            name: {
                type: DataTypes.STRING, allowNull: false
            },
            description: {
                type: DataTypes.TEXT, allowNull: false,
            },
            ingredients: {
                type: DataTypes.ARRAY, allowNull: false,
            },
            steps: {
                type: DataTypes.ARRAY, allowNull: false,
            },
            time: {
                type: DataTypes.INTEGER, allowNull: false, defaultValue: 3600 
            }
        })
    },
    down(queryInterface: QueryInterface) {
        return queryInterface.dropTable('recipes');
    },
}
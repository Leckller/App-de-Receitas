import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from '.';
import Recipe from '../../interfaces/Recipe';

type recipesWithNoId = Optional<Recipe, 'id'>;
export type recipesSequelizeModel = Model<Recipe, recipesWithNoId>
type recipesModelCreate = ModelDefined<Recipe, recipesWithNoId>

const RecipesModel: recipesModelCreate = db.define('recipe', {
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
}, {
    tableName: 'recipes',
    timestamps: false,
    underscored: false,
});

export default RecipesModel;
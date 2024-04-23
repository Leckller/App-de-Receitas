import { DataTypes, Model, ModelAttributes, ModelDefined, Optional } from 'sequelize';
import db from '.';
import User from '../../interfaces/User';

type userWithNoId = Optional<User, 'id'>;
export type userSequelizeModel = Model<User, userWithNoId>;
type userModelCreate = ModelDefined<User, userWithNoId>


const UserModel: userModelCreate = db.define('user', {
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true
    },
    email: {
        type: DataTypes.STRING, unique: true, allowNull: false,
    },
    password: {
        type: DataTypes.STRING(25), allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false,
    underscored: false
})

export default UserModel;
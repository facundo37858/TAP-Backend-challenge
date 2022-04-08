
const { Sequelize, DataTypes}=require('sequelize')


module.exports=(sequelize)=>{

    sequelize.define('state',{

        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        code: {
            type: DataTypes.INTEGER,
            defaultValue:1,
            allowNull: false,
            
        },

        description:{
            type: DataTypes.STRING,
            defaultValue:'CREATED',
            allowNull:false
        },

    },{
        timestamps: false
    })
}
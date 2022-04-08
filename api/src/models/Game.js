
const { Sequelize, DataTypes}=require('sequelize')


module.exports=(sequelize)=>{

    sequelize.define('game',{
        id: {
            type: DataTypes.STRING,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        cells:{
            type:Sequelize.ARRAY(Sequelize.INTEGER),
            defaultValue:[]
            
        },
        created:{
            type:DataTypes.STRING,
    
        }




    },{
       
        timestamps: false
    })
}
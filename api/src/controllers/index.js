const { Game, State }=require('../db')

const addGame=async(req,res,next)=>{

    const { state }= req.body.game
    const { game }= req.body
    
   

    try {
        if(game && state){

            let newgame=await Game.create({
                id:game.id,
                created:game.created
            })
    
            await State.create({
                code:parseInt(state.code),
                description:state.description,
                gameId:newgame.id,
                
            }).then(state=> newgame.setState(state))

            return res.send({menssage:'game created'})




        }
        return res.status(404).send({message:'game not created'})




        
    } catch (error) {
        next(error)
    }

}

const getGame=async(req,res,next)=>{

    const { ID }=req.query
    try{
        if(ID){
        
            let game=await Game.findByPk(
                ID,
                {include:
                    {model:State,as:'state',
                        attributes:['code','description']
                    }
                }
            )
            if(game){
                return res.send({game})

            }
            return res.status(400).send({menssage:`not found game by ID:${ID}`})


        
        }
        let game=await Game.findAll(  {include:
            {model:State,as:'state',
                attributes:['code','description']
            }
        }).then((game)=>game.map(g=>{return {game:g}}))
        

        return res.send(game)

    }catch(e){
        next(e)
    }

    
}

module.exports={
    addGame,
    getGame
}
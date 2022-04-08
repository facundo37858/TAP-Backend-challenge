require('dotenv').config()
const server=require('./src/app')
const{ conn }= require('./src/db')

const port=process.env.PORT||8008

conn.sync({force:true})
.then(()=>server.listen(
    port,
    ()=>console.log(`server listening at port ${port} http://localhost:${port}`)
    )
)


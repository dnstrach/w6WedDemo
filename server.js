const express = require('express')
const app = express()

//any website that's using my orgram have access to my public folder
//express.static give access to any file in public folder
//changes file path once hosted 
app.use(express.static(`${__dirname}/public`))

app.listen(4000,
   () => console.log(`server running on 4000`)
)


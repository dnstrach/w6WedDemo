const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

//any website that's using my orgram have access to my public folder
//express.static give access to any file in public folder
//changes file path once hosted 
app.use(express.static(`${__dirname}/public`))

app.get('/api/cat', (req, res) => {
    res.status(200).send('Macy')
})

app.listen(4000,
   () => console.log(`server running on 4000`)
)


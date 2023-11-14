const express = require('express')
const app = express()
const port = process.env.EXPRESS_PORT || 3000

app.get('/', (req, res) => {
    res.send(`
        <p>Welcome to Kubernautics</p>
    `)
})

app.listen(port, () => console.log("Example app listening on http://localhost:" + port))

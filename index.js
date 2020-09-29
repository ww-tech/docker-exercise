const express = require('express')
const bodyParser = require('body-parser')
const hc = process.env.HEALTHCHECK || '/hc'
const app = express()
const PORT = 8080

app.use(bodyParser.text({type: "*/*", limit: '50mb'}))
app.get(hc, (req, res) => res.send('OK'))
app.use(function(req, res, next) { // i catch 404s
    res.status(404).send("404")
})
app.use((err, req, res, next) => {
    console.log('ERROR =>', err)
    res.status(500).send("500")
})
app.listen(PORT, () => console.log("logger app listening on port "+PORT+"!"))

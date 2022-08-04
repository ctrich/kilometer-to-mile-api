const express = require('express');
const app = express();
const cors = require('cors');
const { response } = require('express');
const PORT = 8000;

app.use(cors());

let kmTOmiles = (km) => {
    return !(km * 0.62137) ? {'kilometers': 'Please enter a number'} : {'kilometers': km * 0.62137};   
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:kilometers', (req, res) => {
    const km = Number(req.params.kilometers);
    res.json(kmTOmiles(km));
})


app.listen(process.env.PORT || PORT, () => {
    console.log((`server is running on PORT ${PORT}`));
})
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/bmi-calculator', (req, res) => res.sendFile(__dirname + "/index.html"));
app.post('/bmi-calculator', function (req, res) {

    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight / (height * height);
    if(result < 18.5) {
        res.send("Your BMI is " + result + " underweight");
    } else if (result >= 18.5 && result < 24.9) {
        res.send("Your BMI is " + result + " normal");
    } else if(result >= 25.0 && result < 29.9) {
        res.send("Your BMI is " + result + " overweight");
    } else if(result > 30.0) {
        res.send("Your BMI is " + result + " obese");
    }

});

app.listen(3000, () => console.log('Server started on port 3000'));
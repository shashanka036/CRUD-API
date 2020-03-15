const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');





const PORT = process.env.PORT || 7000;
const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => res.render('index', {
    tittle: 'Member App',
    members
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/members', require('./Routes/api/Members'))


app.listen(PORT, () => console.log(`port is running succesfully at ${PORT}`))
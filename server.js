const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session'); 
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db:sequelize
    })
}

const app = express();
//const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(process.env.PORT || 3001, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
});





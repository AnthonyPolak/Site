const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const path = require('path');
const handlebars = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');

// sessions
app.use(session({
    secret: "projeto2020",
    resave: true,
    saveUninitialized: true
}));

app.use(flash());0

// middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// handlebars
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static file
app.use(express.static(path.join(__dirname, 'public')));


// routers config
const admin = require('./routers/admin');
const cadastro = require('./routers/cadastro');
const vendas = require('./routers/vendas')

// Body-parser config
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));

app.use('/', admin);
app.use('/cadastro', cadastro);
app.use('/vendas', vendas);


// config listening port 3000
const port = 8081

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
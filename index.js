const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/home-route')

const app = express();
const PORT = 2200;

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));
app.use(homeRoutes.routes);

app.listen(PORT, () => console.log(`App is running on url: http://localhost:${PORT}`));

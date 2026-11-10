const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const petRoutes = require('./routes/pets');
const journalRoutes = require('./routes/journals');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = 3000;

app.use(flash());

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRoutes);
app.use('/', authRoutes);
app.use('/', adminRoutes);
app.use('/', petRoutes);
app.use('/', journalRoutes);
app.use('/payments', paymentRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

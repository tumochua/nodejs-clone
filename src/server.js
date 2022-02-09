import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
import homController from './controller/homController'
import initWebRoute from './route/web'
import connection from './configs/connectDB'
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

configViewEngine(app);

initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


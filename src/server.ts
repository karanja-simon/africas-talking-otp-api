import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Routes from './routes/Routes';



const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(morgan('dev'));


app.use('/api/v1/', Routes);


app.listen(3000, () => {
    console.log('App listening on port 3000');
});
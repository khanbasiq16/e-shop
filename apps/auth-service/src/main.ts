import express from 'express';
import { errormiddlewarehandler } from '../../../packages/error-handler/error-handler';
import cookieParser from 'cookie-parser';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 6001;

const app = express();

app.get('/', (req, res) => {
    res.send({ 'message': 'Hello Muhammad Basiq Khan!'});
});



app.use(express.json())
app.use(cookieParser())
app.use(errormiddlewarehandler)

const server =  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}/api`);
});




server.on('error', (err) => {
    console.error('Server error:', err);
    // process.exit(1);
});

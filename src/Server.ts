import express, { Application } from 'express';
import morgan from 'morgan';
import { Request, Response } from 'express';

//Routes
import userRoutes from './modules/user/userRoutes';
import userRouter from './modules/user/userRoutes';


export default class Server {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        // Enable CORS
        this.app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.settings();
        this.middleware();
        this.routes()
    }

    settings = () => {
        this.app.set('port', this.port || process.env.PORT || 4300);
    };

    middleware = () => {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        // this.app.use(cors);
    };

    routes = () => {
        // Add your routes
        this.app.use(userRouter)
        this.app.use('/',(req, res)=> {
            res.json({data: 'Que esparabas? un chiste, chinga tu madre'});
        })
    };

    listen = async () => {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    };
}

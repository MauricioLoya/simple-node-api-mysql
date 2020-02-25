import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {connect} from "../dataBase";

export default class Controller {

    protected connection: any;

    constructor() {
        this.createConnection();
    }

    protected createConnection = async () => this.connection = await connect();

    protected handleHttpErrors = (req: Request, res: Response): boolean => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors.array()});
            return true
        }
        return false;
    }
}
import Controller from "../../helpers/Controller";
import { Request, Response } from "express";
import UserQuerys from './userQuerys';

export default class UserController extends Controller {

    addUser = async (req: Request, res: Response) => {
    
        // const [data, rows] = await this.connection.query(UserQuerys.listUser);
        // console.log('Query', data);
    
        res.json({data: true});
    }

}
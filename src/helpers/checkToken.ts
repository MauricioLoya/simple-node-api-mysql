import { Request, Response } from "express";

export default (res: Request, respose: Response, next: Function) => {
    console.log('Check Token');
    next();
};
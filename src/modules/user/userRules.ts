import { check } from "express-validator";

export default {
    addUser: [
        check('email')
            .not().isEmpty()
            .isString()
            .isEmail(),
        check('password')
            .not().isEmpty()
            .isString()
            .isLength({ min: 8 }),
    ],
}
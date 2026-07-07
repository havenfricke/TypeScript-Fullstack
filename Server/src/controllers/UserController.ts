import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { UserService } from '../services/UserService';
import { User } from '../models/User';

export class UserController extends BaseController {

    private readonly _userService: UserService;

    // Dependency Injection via constructor
    constructor(userService: UserService) {
        super();
        this._userService = userService;
    }

    public createUser = async (req: Request<{}, any, User>, res: Response): Promise<void> => {
        try {
            const user = await this._userService.createUser(req.body);
            this.ok(res, user)
        } catch (error) {
            this.fail(res, error as Error);
        }
    }
}

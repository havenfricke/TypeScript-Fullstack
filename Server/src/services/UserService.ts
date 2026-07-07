import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export class UserService {

    private readonly _userRepo: UserRepository;

    // Dependency Injection via constructor
    constructor(userRepo: UserRepository) {
        this._userRepo = userRepo;
    }

    public async createUser(body: User): Promise<User> {

        const existing = await this._userRepo.getUserByAuth0Id(body.auth0Id);

        if (existing) {
            return existing;
        }

        const user = await this._userRepo.createUser(body);

        if (!user) {
            throw new Error('Failed to create user.')
        }

        return user;
    }
}

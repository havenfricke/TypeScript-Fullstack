import { Router, Request, Response } from 'express';
import { ExampleRepository } from '../repositories/ExampleRepository';
import { ExampleService } from '../services/ExampleService';
import { ExampleController } from '../controllers/ExampleController';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { UserController } from '../controllers/UserController';
import { checkJwt } from '../middleware/checkJwt';
import path from 'path';

const router = Router();

// Serve static HTML page
router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Instantiate the layers (Injecting dependencies upwards)
const exampleRepo = new ExampleRepository();
const exampleService = new ExampleService(exampleRepo);
const exampleController = new ExampleController(exampleService);

const userRepo = new UserRepository();
const userService = new UserService(userRepo);
const userController = new UserController(userService);

// Map the route to the controller action
router.get('/examples', exampleController.getAllExamples);
router.get('/examples/:id', exampleController.getExampleById);
router.post('/examples', exampleController.createExample);
router.put('/examples/:id', exampleController.editExample);
router.delete('examples/:id', exampleController.deleteExample)
// TODO: DELETE

// Save the authenticated Auth0 user to the database
router.post('/users', checkJwt, userController.createUser);

export default router;
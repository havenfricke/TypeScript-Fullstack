import { Router, Request, Response } from 'express';
import { ExampleRepository } from '../repositories/ExampleRepository';
import { ExampleService } from '../services/ExampleService';
import { ExampleController } from '../controllers/ExampleController';
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

// Map the route to the controller action
router.get('/examples', exampleController.getAllExamples);
router.get('/examples/:id', exampleController.getExampleById);
router.post('/examples', exampleController.createExample);
// TODO: EDIT
// TODO: DELETE

export default router;
import { Router } from 'express';
import { ExampleRepository } from '../repositories/ExampleRepository';
import { ExampleService } from '../services/ExampleService';
import { ExampleController } from '../controllers/ExampleController';

const router = Router();

// Instantiate the layers (Injecting dependencies upwards)
const exampleRepo = new ExampleRepository();
const exampleService = new ExampleService(exampleRepo);
const exampleController = new ExampleController(exampleService);

// 2. Map the route to the controller action
router.get('/examples', exampleController.getAllExamples);

export default router;
import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { ExampleService } from '../services/ExampleService';

export class ExampleController extends BaseController {

    private readonly _exampleService: ExampleService;

    // Dependency Injection via constructor
    constructor(exampleService: ExampleService) {
        super();
        this._exampleService = exampleService;
    }
    
    public getAllExamples = (req: Request, res: Response): void => {
        try {
            // Call the service
            const data = this._exampleService.getAllExamples();
            // Return HTTP 200 OK with the data payload using the BaseController
            this.ok(res, data);
        } catch (error) {
            // Handle unexpected internal errors gracefully
            this.fail(res, error as Error);
        }
    }

}
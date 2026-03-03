import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { ExampleService } from '../services/ExampleService';
import { RouteParams } from '../models/RouteParams';
import { Example } from '../models/Example';

export class ExampleController extends BaseController {

    private readonly _exampleService: ExampleService;

    // Dependency Injection via constructor
    constructor(exampleService: ExampleService) {
        super();
        this._exampleService = exampleService;
    }
    
    public getAllExamples = async (req: Request, res: Response): Promise<void> => {
        try {
            const examples = await this._exampleService.getAllExamples();
            this.ok(res, examples);
        } catch (error) {
            this.fail(res, error as Error);
        }
    }

    public getExampleById = async (req: Request<RouteParams>, res: Response): Promise<void> => {
        try {
            const example = await this._exampleService.getExampleById(req.params.id);
            this.ok(res, example)
        } catch (error) {
            this.fail(res, error as Error);
        }
    }

    public createExample = async (req: Request<{}, any, Example>, res: Response): Promise<void> => {
        try {
            const example = await this._exampleService.createExample(req.body);
            this.ok(res, example)
        } catch (error) {
            this.fail(res, error as Error);
        }
    }

    // TODO: EDIT ROUTE

    // TODO: DELETE ROUTE

}
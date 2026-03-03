import { ExampleRepository } from '../repositories/ExampleRepository';
import { Example } from '../models/Example';

export class ExampleService {

    private readonly _exampleRepo: ExampleRepository;

    // Dependency Injection via constructor
    constructor(exampleRepo: ExampleRepository) {
        this._exampleRepo = exampleRepo;
    }

    public getAllExamples(): Example[] {
        // Business logic here 
        const examples = this._exampleRepo.getAllExamples();
        
        if (!examples) {
            throw new Error("Failed to retrieve examples.");
        }

        return examples;
    }
}
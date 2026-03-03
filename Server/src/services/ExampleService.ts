import { ExampleRepository } from '../repositories/ExampleRepository';
import { Example } from '../models/Example';

export class ExampleService {

    private readonly _exampleRepo: ExampleRepository;

    // Dependency Injection via constructor
    constructor(exampleRepo: ExampleRepository) {
        this._exampleRepo = exampleRepo;
    }

    public getAllExamples(): Promise<Example[]> {

        const examples = this._exampleRepo.getAllExamples();
        
        if (!examples) {
            throw new Error("Failed to retrieve examples.");
        }

        return examples;
    }

    public getExampleById(id: String): Promise<Example> {

        const example = this._exampleRepo.getExampleById(id);

        if (!example) {
            throw new Error("Failed to retrieve example by id.");
        }

        return example;
    }
}
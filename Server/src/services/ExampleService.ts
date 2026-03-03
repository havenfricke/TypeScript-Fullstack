import { ExampleRepository } from '../repositories/ExampleRepository';
import { Example } from '../models/Example';

export class ExampleService {

    private readonly _exampleRepo: ExampleRepository;

    // Dependency Injection via constructor
    constructor(exampleRepo: ExampleRepository) {
        this._exampleRepo = exampleRepo;
    }

    public async getAllExamples(): Promise<Example[]> {

        const examples = await this._exampleRepo.getAllExamples();
        
        if (!examples) {
            throw new Error("Failed to retrieve examples.");
        }

        return examples;
    }

    public async getExampleById(id: String): Promise<Example> {

        const example = await this._exampleRepo.getExampleById(id);

        if (!example) {
            throw new Error("Failed to retrieve example by id.");
        }

        return example;
    }

    public async createExample(body: Example): Promise<Example> {

        const example = await this._exampleRepo.createExample(body);

        if (!example) {
            throw new Error('Failed to create example.')
        }

        return example;
    }
}
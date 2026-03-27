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

    public async getExampleById(id: Number): Promise<Example> {

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

    public async editExample(id: Number, body: Example): Promise<Example> {
        const original = await this._exampleRepo.getExampleById(id);

        if (!original)
        {
            throw new Error("Example to edit not found.");
        }

        // if update value == original value, use original. Else, use update value.
        const updatedExample: Example = {
            id: original.id,
            name: original.name == body.name ? original.name : body.name,
            description: original.description == body.description ? original.description : body.description
        };

        const updated = await this._exampleRepo.editExample(original.id, updatedExample);

        return updated;
    }

    public async deleteExample(id: Number): Promise<boolean> {
        const deleted = await this._exampleRepo.deleteExample(id);

        if (!deleted) {
            throw new Error("Failed to delete.");
        }
        
        return deleted;
    }
}
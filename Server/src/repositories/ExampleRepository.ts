import { Example } from "../models/Example"

export class ExampleRepository {
    // Simulating a database table
    private examples: Example[] = [
        { id: '1', name: 'First Example', description: 'Hello World' },
        { id: '2', name: 'Second Example' }
    ];

    public getAllExamples(): Example[] {
        // TODO: add mysql library for TS and update repo layer
        return this.examples;
    }
}
import { Example } from "../models/Example"
import { query } from "../DB/DbConnection"

export class ExampleRepository {
    
    public async getAllExamples(): Promise<Example[]> {
        const sql: string = "SELECT * FROM examples";
        return await query<Example[]>(sql, []);
    }

    public async getExampleById(id: String): Promise<Example> {
        const sql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(sql, [id]);  
    }
}
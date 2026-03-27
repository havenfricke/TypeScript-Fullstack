import { Example } from "../models/Example"
import { query } from "../DB/DbConnection"
import { ResultSetHeader } from "mysql2/promise";

export class ExampleRepository {
    
    public async getAllExamples(): Promise<Example[]> {
        const sql: string = "SELECT * FROM examples";
        return await query<Example[]>(sql, []);
    }

    public async getExampleById(id: Number): Promise<Example> {
        const sql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(sql, [id]);  
    }

    public async createExample(body: Example): Promise<Example> {
        const createSql: string = "INSERT INTO examples (name, description) VALUES (?, ?)";
        const insertResult: ResultSetHeader = await query<ResultSetHeader>(createSql, [body.name, body.description]);
        const selectSql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(selectSql, [insertResult.insertId]);
    }

    public async editExample(id: number, body: Example): Promise<Example> {
        const editSql: string = "UPDATE examples SET (name, description) WHERE id = ?";
        const updateResult: ResultSetHeader = await query<ResultSetHeader>(editSql, [body.name, body.description]);
        const selectSql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(selectSql, [updateResult.insertId]);
    }

    public async deleteExample(id: Number): Promise<boolean> {
    const sql = "DELETE FROM examples WHERE id = ?";
    const result = await query<any>(sql, [id]);
    return result.rowsAffected > 0;
}
}
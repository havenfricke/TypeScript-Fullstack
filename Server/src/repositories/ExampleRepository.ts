import { Example } from "../models/Example"
import { query } from "../DB/DbConnection"
import { ResultSetHeader } from "mysql2/promise";

export class ExampleRepository {
    
    public async getAllExamples(): Promise<Example[]> {
        const sql: string = "SELECT * FROM examples";
        return await query<Example[]>(sql, []);
    }

    public async getExampleById(id: String): Promise<Example> {
        const sql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(sql, [id]);  
    }

    public async createExample(body: Example): Promise<Example> {
        const createSql: string = "INSERT INTO examples (name, description) VALUES (?, ?)";
        const insertResult = await query<ResultSetHeader>(createSql, [body.name, body.description]);
        const selectSql: string = "SELECT * FROM examples WHERE id = ?";
        return await query<Example>(selectSql, [insertResult.insertId]);
    }

    // TODO: EDIT QUERY

    // TODO: DELETE QUERY
}
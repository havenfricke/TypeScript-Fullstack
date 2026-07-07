import { User } from "../models/User"
import { query } from "../DB/DbConnection"
import { ResultSetHeader } from "mysql2/promise";

export class UserRepository {

    public async getUserByAuth0Id(auth0Id: string): Promise<User> {
        const sql: string = "SELECT * FROM users WHERE auth0Id = ?";
        return await query<User>(sql, [auth0Id]);
    }

    public async createUser(body: User): Promise<User> {
        const createSql: string = "INSERT INTO users (auth0Id, email, name) VALUES (?, ?, ?)";
        const insertResult: ResultSetHeader = await query<ResultSetHeader>(createSql, [body.auth0Id, body.email, body.name]);
        const selectSql: string = "SELECT * FROM users WHERE id = ?";
        return await query<User>(selectSql, [insertResult.insertId]);
    }
}

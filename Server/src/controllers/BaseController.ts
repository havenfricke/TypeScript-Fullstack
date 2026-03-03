import { Request, Response } from "express";

export abstract class BaseController {

    // Success(uri, object)
    protected ok<T>(res: Response, dataTransferObject?: T): void {
        if (dataTransferObject) {
            res.status(200).json(dataTransferObject);
        } else {
            res.sendStatus(200);
        }
    }

    // Created(uri, object)
    protected created<T>(res: Response, dataTransferObject?: T): void {
        res.status(201).json(dataTransferObject || { message: 'Created' });
    }

    // BadRequest(string)
    protected clientError(res: Response, message?: string): void {
        res.status(400).json({ message: message || 'Bad Request' });
    }

    // NotFound(string)
    protected notFound(res: Response, message?: string): void {
        res.status(404).json({ message: message || 'Not Found' });
    }

    // Unhandled exception or internal 500 error
    protected fail(res: Response, error: Error | string): void {
        console.error(error);
        res.status(500).json({ message: 'An unexpected error occurred' });
    }

}
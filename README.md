### TypeScript Fullstack

React client + Express server

### Getting Started (Client + Server)

To install necessary packages / libraries:

- `cd Client`
- `npm i`
- `cd..`
- `cd Server`
- `npm i`

To run either on a dev server use `npm run dev` while in either directory.

### Server Architecture

**Controllers**
Responsible for incoming traffic, handling files, and authorization.

**DB**
Responsible for creating a pool connection to the MySQL database cluster and executing MySQL commands (Object relational mapping).

**Models**
Responsible for modeling known incoming and outgoing data structures, allowing control over what data is included in the application.

**Repositories**
Responsible for querying necessary MySQL logic related to the application's functionality (Object relational mapping).

**Services**
Responsible for additional logic necessary for the data to be well received by the repository and database.

**Utils**
Responsible for additional refactored code dump called upon by the core system.

**.env**
Responsible for housing and distributing sensitive information throughout the application (hidden during runtime).

#### Example data model (Server)

This model uses a TypeScript interface - a syntactical contract that defines the shape or structure of an object, function, or class by specifying its required properties and methods. 

Nullable types are allowed to synchronize database needs with server function. They are delineated using "?" just after a decalred property of an interface.

```ts
export interface Example {
    id: string;
    name: string;
    description?: string; // nullable type
}
```

### Client Architecture

The core logic resides in the src/ directory. Here is the high-level map:

**public folder** 
Static files like images, SVGs, and text documents.

**Src/Components**
Shared UI components (Buttons, Inputs, Modals) that are used across multiple features.

**Src/Models**
Shared TypeScript interfaces and aliases.

**Src/Pages**
Components that are specifically pages. Used in Router.tsx to match pages to url endpoints.

**Src/Services**
For scripts that utilize Axios to make API calls and interact with AppState.ts for application state control.

**Utils**
For utility scripts and helpers. Assists in keeping the project clean and refactored.

**Src/assets**
For internal asset storage and retrieval. Similar to public folder only it is private.


If you want to secure your environment using `dotenv`, install the package and utilize Vite to distribute environment variables.

More information on how to do this can be found on [Vite's documentation](https://vite.dev/guide/env-and-mode) for using `dotenv`.
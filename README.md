### The Underground Portal

Web portal for: https://github.com/havenfricke/the_underground

### Getting Started (Client + Server)

To install necessary packages / libraries:

- `cd Client`
- `npm i`
- `cd..`
- `cd Server`
- `npm i`

To run either on a dev server use `npm run dev` while in either directory (Server or Client).

### Server Architecture

**Controllers**:
Responsible for incoming traffic, handling files, and authorization.

**DB**:
Responsible for creating a pool connection to the MySQL database cluster and executing MySQL commands (Object relational mapping).

**Models**:
Responsible for modeling known incoming and outgoing data structures, allowing control over what data is included in the application.

**Repositories**:
Responsible for querying necessary MySQL logic related to the application's functionality (Object relational mapping).

**Services**:
Responsible for additional logic necessary for the data to be well received by the repository and database.

**Utils**:
Responsible for additional refactored code dump called upon by the core system.

**.env**:
Responsible for housing and distributing sensitive information throughout the application (hidden during runtime).

### Example data model (Server)

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

**public folder** :
Static files like images, SVGs, and text documents.

**Components**:
Shared UI components (Buttons, Inputs, Modals) that are used across multiple features.

**Models**:
Shared TypeScript interfaces and aliases.

**Pages**:
Components that are specifically pages. Used in Router.tsx to match pages to url endpoints.

**Services**:
For scripts that utilize Axios to make API calls and interact with AppState.ts for application state control.

**Utils**:
Responsible for additional refactored code dump called upon by the core system.

**assets**:
For internal asset storage and retrieval. Similar to public folder only it is private.


If you want to secure your environment using `dotenv`, install the package and utilize Vite to distribute environment variables.

More information on how to do this can be found on [Vite's documentation](https://vite.dev/guide/env-and-mode) for using `dotenv`.

### Account System (Auth0)

Account creation and login are handled by [Auth0](https://auth0.com). When a user finishes authenticating on the client, their profile is sent to the server and saved to the `users` table so the rest of the application has a local record to relate data to.

**Setup**:

1. In the Auth0 dashboard, create a **Single Page Application** (for the Client) and an **API** (to act as the audience for access tokens).
2. Under the SPA's settings, add `http://localhost:5173` to *Allowed Callback URLs*, *Allowed Logout URLs*, and *Allowed Web Origins* (adjust the port/domain for production).
3. Fill in `Client/.env`:
    ```
    VITE_AUTH0_DOMAIN=your-tenant.us.auth0.com
    VITE_AUTH0_CLIENT_ID=<SPA client id>
    VITE_AUTH0_AUDIENCE=<API identifier>
    VITE_SERVER_URL=http://localhost:3000
    ```
4. Fill in `Server/.env`:
    ```
    AUTH0_DOMAIN=your-tenant.us.auth0.com
    AUTH0_AUDIENCE=<API identifier>
    ```
5. Run the `CREATE TABLE users` statement in `Server/src/util/commands.mysql` against your database.

**How it works**:

- `Navbar.tsx` renders a **Log In** / **Log Out** button using the `useAuth0()` hook (`loginWithRedirect` / `logout`).
- Once Auth0 confirms `isAuthenticated`, a `useEffect` in `App.tsx` requests an access token with `getAccessTokenSilently()` and calls `userService.createUser()`, which `POST`s the profile to `/users`.
- The server verifies the access token with the `checkJwt` middleware (`Server/src/middleware/checkJwt.ts`) before the request reaches `UserController`.
- `UserService.createUser` looks the user up by `auth0Id` first, so returning users are fetched rather than duplicated.

**User data model** (mirrored on Client and Server):

```ts
export interface User {
    id: number;
    auth0Id: string; // Auth0 "sub" claim, unique per account
    email: string;
    name?: string; // nullable type
}
```
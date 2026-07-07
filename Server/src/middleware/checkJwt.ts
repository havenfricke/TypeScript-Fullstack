import { auth } from "express-oauth2-jwt-bearer";

// Verifies the Auth0 access token attached to incoming requests
export const checkJwt = auth({
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    audience: process.env.AUTH0_AUDIENCE,
});

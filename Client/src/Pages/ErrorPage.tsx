import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error))
    {
        return (
        <div id="error-page">
            <h1 className="display-3">Oops! {error.status}</h1>
            <p className="small">
                {error.status} | {error.data || error.statusText}
            </p>
        </div>
        );
    }
    
  }
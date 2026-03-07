import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AppState } from "../AppState";
import { exampleService } from "../Services/ExampleService"; 

// Wrap the component in observer so it re-renders when AppState changes
const ExamplesPage = observer(() => {
    
    // Fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                await exampleService.getAllExamples();
            } catch (error) {
                console.error("Failed to fetch examples:", error);
            }
        };
        fetchData();
    }, []);

    // Handle delete action
    const handleDelete = async (id: string) => {
        try {
            await exampleService.deleteExample(id);
        } catch (error) {
            console.error("Failed to delete example:", error);
        }
    };

    return (
        <div>
            <h2>Examples Page</h2>
            
            {AppState.exampleArray.length === 0 ? (<p>Loading or no examples found...</p>) : (
                <ul>

                    {AppState.exampleArray.map((example) => (

                        <li key={example.id}>

                            ID: {example.id} 

                            <button onClick={() => handleDelete(example.id)}>
                                Delete
                            </button>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
});

export default ExamplesPage;
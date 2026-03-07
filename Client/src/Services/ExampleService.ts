import { AppState } from "../AppState";
import type Example from "../Models/Example";
import { api } from "./AxiosService";

// TODO: Write a service
class ExampleService {

    async createExample(data: Example) {
        const res = await api.post<Example>('/examples', data);
        console.log("create example:", res)
        AppState.exampleObject = res.data;
    }

    async getAllExamples() {
        AppState.exampleArray = [];
        const res = await api.get<Example[]>("/examples");
        console.log("get examples:", res.data);
        AppState.exampleArray = res.data;
    }

    async getExampleById(id: string) {
        const res = await api.get<Example>(`/examples/${id}`)
        console.log("get example by id:", res.data);
        AppState.activeExample = res.data;
    }

    async editExample(id: string, data: Example) {
        const res = await api.put<Example>(`examples/${id}`, data);
        console.log("edit example:", res.data);
        AppState.activeExample = res.data;
    }

    async deleteExample(id: string){
        const res = await api.delete<boolean>(`/examples/${id}`)
        console.log("deleted?:", res.data);
        if (res.data === true)
        {
            AppState.exampleArray = AppState.exampleArray.filter(ex => ex.id !== id)
        }
    }
}

export const exampleService = new ExampleService();
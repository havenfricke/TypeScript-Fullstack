import { AppState } from "../AppState";
import type User from "../Models/User";
import { api } from "./AxiosService";

class UserService {

    async createUser(data: Partial<User>, accessToken: string) {
        const res = await api.post<User>('/users', data, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log("create user:", res.data);
        AppState.user = res.data;
    }
}

export const userService = new UserService();

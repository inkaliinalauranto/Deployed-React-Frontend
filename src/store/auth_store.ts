import { proxy } from "valtio";
import { AuthReq } from "../models/auth";
import { login } from "../services/auth";

export const authStore = proxy({
    token: "",

    async login(credentials: AuthReq) {
        const result = await login(credentials)
        this.token = result.token
    },

    logout() {
        this.token = ""
    }
})
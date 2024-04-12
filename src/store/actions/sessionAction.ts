import api from "../../api";
import { loginSession } from "../slices/sessionSlice";

export function userLogin(body: any, navigate: any) {
    return async (dispatch: any) => {
        api.post(``, body).then(async (response: any) => {
            if (response.status === 'success') {
                dispatch(loginSession(response.payload))
            }
        })
    }
};
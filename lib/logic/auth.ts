import { UserProfile } from "../types/user.type"
import { LoginData } from "../types/auth.type"
import { setAuthCookie, removeAuthCookie, hasAuthCookie } from "../cookies/cookie"
import { postRequest, getRequest } from "../api/api"

export async function login(email: string, password: string){
    try{
        const response: LoginData = await postRequest("/auth/login",{email,password})
        setAuthCookie(response.token)
        return response.user
    }catch(error){
        throw error
    }
}

export async function userInformation(){
    try{
        const response: UserProfile = await getRequest("/auth/user")
        return response
    }catch(error){
        throw error
    }
}

export async function logout(){
    try{
        if(hasAuthCookie()){
            await postRequest("/auth/logout")
        }
    }catch(error){
        throw error
    }finally{
        removeAuthCookie()
        window.location.href = '/login'; 
    }
}


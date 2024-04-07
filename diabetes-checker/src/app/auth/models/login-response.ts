export interface LoginResponse {
    id:string;
    token: string;
    email: string;
    userName:string;
    roles: string[];
}
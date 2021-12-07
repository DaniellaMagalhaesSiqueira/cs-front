export interface User{
    id: string;
    isAdmin: boolean;
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthDate: string | Date;
}
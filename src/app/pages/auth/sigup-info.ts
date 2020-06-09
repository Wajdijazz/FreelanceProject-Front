export class SignUpInfo {
   
    email: string;
    password: string;
    role: string[];

 
    constructor( email: string, password: string) {
     
        this.email = email;
        this.password = password;
        this.role = ['ADMIN'];
    }
}
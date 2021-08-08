import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";



/*
idToken	string	A Firebase Auth ID token for the newly created user.
email	string	The email for the newly created user.
refreshToken	string	A Firebase Auth refresh token for the newly created user.
expiresIn	string	The number of seconds in which the ID token expires.
localId	string	The uid of the newly created user.
* */
interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({providedIn:'root'})
export class AuthService{


    constructor( private httpClient:HttpClient) {
    }

    signup(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKklu_He8ReMEJsIrhkG61IpOX8HMbdPY',
            {
                email: email,
                password: password,
                returnSecureToken: true
            })
    }

}

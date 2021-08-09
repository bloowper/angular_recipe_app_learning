import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";


/*
idToken	string	A Firebase Auth ID token for the newly created user.
email	string	The email for the newly created user.
refreshToken	string	A Firebase Auth refresh token for the newly created user.
expiresIn	string	The number of seconds in which the ID token expires.
localId	string	The uid of the newly created user.
* */
export interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({providedIn:'root'})
export class AuthService{


    constructor( private httpClient:HttpClient) {
    }

    signup(email: string, password: string) {
        return this.httpClient.
        post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKklu_He8ReMEJsIrhkG61IpOX8HMbdPY',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).
        pipe(catchError(error => {
            let errorMessage = "an unknown error has occurred"
            if (!error.error || !error.error.error) {
                return throwError(errorMessage);
            }
            switch (error.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = "Email exist";
                    break;
            }
            return throwError(errorMessage);
        }));
    }

    login(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKklu_He8ReMEJsIrhkG61IpOX8HMbdPY",
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
            );
    }


}


// idToken	string	A Firebase Auth ID token for the authenticated user.
//     email	string	The email for the authenticated user.
//     refreshToken	string	A Firebase Auth refresh token for the authenticated user.
//     expiresIn	string	The number of seconds in which the ID token expires.
//     localId	string	The uid of the authenticated user.
//     registered	boolean	Whether the email is for an existing account.

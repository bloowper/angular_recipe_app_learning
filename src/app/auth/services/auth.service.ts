import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
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
        return this.httpClient.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKklu_He8ReMEJsIrhkG61IpOX8HMbdPY',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).
        pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKklu_He8ReMEJsIrhkG61IpOX8HMbdPY",
        {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).
        pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = "an unknown error has occurred"
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = "Email exist";
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = "Email not found";
                break;
            case 'INVALID_PASSWORD':
                errorMessage = "Password in invalid";
                break;
            case 'USER_DISABLED':
                errorMessage = "User is disabled by administrator";
                break;
        }
        return throwError(errorMessage);
    }
}


//     EMAIL_NOT_FOUND: There is no user record corresponding to this identifier. The user may have been deleted.
//     INVALID_PASSWORD: The password is invalid or the user does not have a password.
//     USER_DISABLED: The user account has been disabled by an administrator.

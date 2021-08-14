import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "../services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth-component',
    templateUrl: './auth-component.component.html',
    styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

    isLoginMode = true;
    isLoading = false;
    error: string | undefined = undefined;

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {

    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }



    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        let email = form.value.email;
        let password = form.value.password;
        this.isLoading = true;
        let authObs: Observable<AuthResponseData>

        if (this.isLoginMode) {
            authObs = this.authService.login(email, password)
        }else {
            authObs = this.authService.signup(email, password)
        }

        authObs.subscribe(
            value => {
                console.log(value);
                this.isLoading = false;
                this.router.navigate(["/recipes"]);
            },
            errorMessage => {
                console.log(errorMessage);
                this.error = errorMessage;
                this.isLoading = false;
            }
        );
        form.reset();
    }
}


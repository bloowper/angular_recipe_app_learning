import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'app-auth-component',
    templateUrl: './auth-component.component.html',
    styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

    isLoginMode = true;
    isLoading = false;
    error: string | undefined = undefined;

    constructor(private authService: AuthService) {
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
        if (this.isLoginMode) {

        }else {
            this.authService.signup(email, password).subscribe(
                value => {
                    console.log("Sign up success")
                    console.log(value);
                    this.isLoading = false;
                },
                error => {
                    console.log("Sign up fail")
                    console.log(error);
                    this.error = "An error occurred!";
                    this.isLoading = false;
                }
            );
        }
        form.reset();
    }
}

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

        if (this.isLoginMode) {
            //..
        }else {
            this.authService.signup(email, password).subscribe(
                value => {
                    console.log("Sign up success")
                    console.log(value);
                },
                error => {
                    console.log("Sign up fail")
                    console.log(error);
                }
            );
        }

        form.reset();
    }
}

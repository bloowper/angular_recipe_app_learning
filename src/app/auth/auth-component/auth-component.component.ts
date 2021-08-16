import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "../services/auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../../shared/alert/alert.component";
import {PlaceholderDirective} from "../../shared/placeholder/placeholder.directive";
import {hostViewClassName} from "@angular/compiler";

@Component({
    selector: 'app-auth-component',
    templateUrl: './auth-component.component.html',
    styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit,OnDestroy {

    isLoginMode = true;
    isLoading = false;
    error: string | undefined | null;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective|undefined;
    private $closeErrorEvent: Subscription | undefined;

    constructor(private authService: AuthService, private router: Router,private componentFactoryResolver:ComponentFactoryResolver) {

    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.$closeErrorEvent?.unsubscribe();
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
                this.showErrorAlert(errorMessage);
            }
        );
        form.reset();
    }

    onHandleError() {
        this.error = null;
    }


    private showErrorAlert(errorMessage: string) {
        // const alertComponent = new AlertComponent();
        const alertComponentComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const viewContainerRef = this.alertHost?.viewContainerRef;
        viewContainerRef?.clear();
        const component = viewContainerRef?.createComponent(alertComponentComponentFactory);
        if (component) {
            component.instance.message = errorMessage;
             this.$closeErrorEvent= component.instance.close.subscribe(()=>{
                 this.$closeErrorEvent?.unsubscribe();
                 viewContainerRef?.clear();
            });
        }
    }
}


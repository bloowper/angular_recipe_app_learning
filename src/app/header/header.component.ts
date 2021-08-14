import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-strage.service";
import {AuthService} from "../auth/services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    collapsed = true;
    isAuthenticated = false;

    constructor(private storageService:DataStorageService,
                private authService:AuthService) {

    }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            console.log("OBSERWER")
            console.log(user);
            console.log(this.isAuthenticated)
            this.isAuthenticated = !!user;
            console.log(this.isAuthenticated)

        })
    }


    onSaveData() {
        this.storageService.storeRecipes();
    }

    onFetchData() {
        console.log("Fetching data")
        this.storageService.fetchRecipes().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }
}

import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-strage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    collapsed = true;

    constructor(private storageService:DataStorageService) {

    }

    ngOnInit(): void {

    }


    onSaveData() {
        this.storageService.storeRecipes();
    }

    onFetchData() {
        this.storageService.fetchRecipes();
    }
}

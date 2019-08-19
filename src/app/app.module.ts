import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {MerchantComponent} from './merchant';
import {FormsModule} from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './profile-merchant';
import { InventoryControlComponent } from './inventory.component';

const routes:Routes=[
   // {path: '', redirectTo: 'log', pathMatch: 'full' },
   //{ path: 'merchant', redirectTo: '/merchant',pathMatch: 'full' },
   {path:'',component:MerchantComponent},
    {path:'profile',component:ProfileComponent},
    {path:'merchant',component:MerchantComponent},
    {path:'inventoryControl',component:InventoryControlComponent}
   
];

@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
        
    ],
    declarations: [
        AppComponent,ProfileComponent,MerchantComponent,InventoryControlComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }
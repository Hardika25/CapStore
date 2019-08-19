import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./inventory.component";
import { Merchant } from "./profile-merchant";


@Injectable({
    providedIn:'root'
})
 export class dataService{
     constructor(private http:HttpClient){}
     
     addProduct(product){
         this.http.post(`http://localhost:4000/product/add`,product);
     }

     deleteProduct(product){
        this.http.delete(`http://localhost:4000/product/delete`,product);
    }

    fetchInventory(mid){
        return this.http.get<Product[]>(`http://localhost:4000/inventoryControl/`+2);
    }

    fetchMerchantDetails(mid){
        return this.http.get<Merchant>(`http://localhost:4000/merchantprofile/`+2);
    }

 }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataService } from './dataservice';



export class Product{
    constructor(
        public productID:number,
        public productName:String ,
        //public merchant:null,
        //public tag:null,
        public company:String,
        public photo:String,
        public description:String,
        public quantity:number,
        public catagory:String,
        public subcategory:String,
        public soldQuantantities:number,
        public price:number,
        public releaseDate:Date
    ){}
}
@Component({
    selector: 'inventoryControl',
    templateUrl: 'inventory.html'
})

export class InventoryControlComponent { 

    inv:Product[];
    mid:number

    ngOnInit(): void
    {
        this.refreshInventory();
}


    constructor(private service :dataService){}


    refreshInventory(){
        this.service.fetchInventory(this.mid).subscribe(
            response=>{
                console.log(response)
                this.inv = response
            }
        );
    }


    addProduct()
    {
        alert("integration goes here")
    }
}
import { Component } from '@angular/core';
import { dataService } from './dataservice';
import { Merchant } from './profile-merchant';

@Component({
    selector: 'merchant',
    templateUrl: 'merchant.html'
})

export class MerchantComponent {

    merchant:Merchant = new Merchant()
    mid:number

    constructor( private service:dataService){
       this.refreshData(this.mid)
    }

    

    
    refreshData(mid){
    this.service.fetchMerchantDetails(this.mid).subscribe(
        data=>{
            console.log(data)
            this.merchant = data
            
        }
    )
    }
}
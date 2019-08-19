import {Component} from "@angular/core";
import { Router } from "@angular/router";
import { dataService } from "./dataservice";

export class Merchant{
    constructor(
      
    ){

      
    }
    merchantId:number
    firstName:String
     lastName:String
     company:String
     emailid:String
     mobileno:String
     password:String
     photo:String
     rating:number
}
@Component({
    selector:'profile',
    templateUrl:'profile-merchant.html'
})

export class ProfileComponent
{
    merchantDetails:Merchant= new Merchant()
    mid:number
   
    constructor(private router:Router,private service:dataService){
        this.refreshData(this.mid)
    }

    refreshData(mid)
    {
        this.service.fetchMerchantDetails(this.mid).subscribe(
            data=>{
                console.log(data)
                this.merchantDetails = data
            }
        )
    }


}
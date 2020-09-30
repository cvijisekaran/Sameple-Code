import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";
import { ItemSearchCriteria } from "../model/itemmodel/itemsearchCriteria";
import { ItemSrchCriteria } from "../model/itemmodel/ItemSrchCriteria";
import { ItemSearchResponse } from "../model/itemmodel/ItemSearchResponse";


@Injectable()
export class ItemsMaintenanceService extends GenericService {

    itemsdefaultpage = new Subject<boolean>();
    enableitemsdetailspage = new Subject<boolean>();
    ItemSearchResults = new Subject<ItemSearchResponse>();
    itemsearchcriteriawithValues = new Subject<ItemSrchCriteria>();
   
    //Inject http
    constructor(private _http: Http) {
        super();
    }
    getSearchItemPackageCategory(itemsearchcriteria: ItemSrchCriteria) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In Package Category Service");
        return this._http.post(this.urlName + '/services/getAllPackageCategoriesForItems', itemsearchcriteria, options)
            .map((resp: Response) => {
                console.log("get package category respnse");
                return resp
            });
    }

    //getBeverageCategories
    public getBeverageCategories(itemsearchcriteria: ItemSrchCriteria): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In Beverage Cat Service");
        return this._http.post(this.urlName + '/services/getAllBeverageCategoriesByCUstomer', itemsearchcriteria, options)
            .map((resp: Response) => {
                console.log("get Beverage Cat respnse");
                return resp
            });

    }

    getitemsearchResults(itemsearchcriteria: ItemSrchCriteria) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In item search result Service");
        return this._http.post(this.urlName + '/services/searchVmpItems', itemsearchcriteria, options)
            .map((resp: Response) => {
                console.log("get got item search  respnse");
                return resp
            });
    }


    getItemdetails(isscomprodetails: IsscomBevProdDetails) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In get itemdetails Service");
        return this._http.post(this.urlName + '/services/getItemdetails', isscomprodetails, options)
            .map((resp: Response) => {
                console.log("get get itemdetails respnse");
                return resp
            });
    }

   
    geteditItemdetails(edititem: ItemSrchCriteria){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("In get itemdetails Service");
        return this._http.post(this.urlName + '/services/getItemdetails', edititem, options)
            .map((resp: Response) => {
                console.log("get get itemdetails respnse");
                return resp
            });
    }
   
}

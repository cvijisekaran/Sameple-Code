import { Component, OnInit } from "@angular/core";
import { BottlerMaintenanceService } from "../Service/bottlermnt.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ItemsMaintenanceService } from "../Service/itemMnt.service";
import { ItemSearchCriteria } from "../model/itemmodel/itemsearchCriteria";
import { ItemSrchCriteria } from "../model/itemmodel/ItemSrchCriteria";

@Component({
  selector: 'app-edititemtovmp',
  templateUrl: './edititemtovmp.component.html',
  styleUrls: ['../../../assets/css/global.component.css']
})
export class EditVMPComponent implements OnInit {
  isEditDiv: boolean = false;
  //isformValid:boolean=true;
  isvalidForm: boolean = true
  isvalidated: boolean = false;
  isbottlervalid: boolean = true;
  public itemSearchCriteriaModel = {} as ItemSrchCriteria
  editItemForm: FormGroup;
  packageCategoryId: any[];
  packageGroupId: any[];
  beverageCategoryId: any[];
  constructor(private itemsMntService: ItemsMaintenanceService,
    private router: Router, private route: ActivatedRoute) {
    this.editItemForm = new FormGroup({
      upc: new FormControl(''),
      customerItemNumber :new FormControl(''),
      beverageCategoryId :new FormControl(''),
      packageCategoryId :new FormControl(''),
      packageGroupId :new FormControl(''),
      beverageProductCode :new FormControl(''),
      packageCode :new FormControl('')

    });

  }


  ngOnInit() {
    this.itemSearchCriteriaModel.customerId=2;
    this.itemsMntService.getBeverageCategories(this.itemSearchCriteriaModel)
      .subscribe(resp => {
        this.beverageCategoryId = resp.json();
        console.log("bev cat length is ==> "+this.beverageCategoryId.length);
      });
  }


  showEditDiv() {
    if (this.isEditDiv)
      this.isEditDiv = false;
    else
      this.isEditDiv = true;
  }

  edititemtoVmp() {

    console.log("form submitted....");
    this.isformvalid();
    if (this.isvalidForm) {
      console.log("form valid....");
      this.itemsMntService.getitemsearchResults(this.itemSearchCriteriaModel)
        .subscribe(resp => {
          this.itemsMntService.editVMPItemSearchResults.next(resp.json());
          if (resp.status == 200) {
            this.itemsMntService.itemsearchcriteriawithValues.next(this.itemSearchCriteriaModel);
          }
        })
      this.itemsMntService.itemsdefaultpage.next(true);
      this.router.navigate(['editivmpitem'], { relativeTo: this.route });
    } else {
      console.log("form not valid....");
      this.itemsMntService.itemsdefaultpage.next(false);
      //this.router.navigate(['editivmpitem'],{relativeTo:this.route});
    }
  }
  getSearchItemPackageCategory(evn) {
    console.log("Package Category ID==> ", this.itemSearchCriteriaModel.packageCategoryId);

    this.itemsMntService.getSearchItemPackageCategory(this.itemSearchCriteriaModel)
      .subscribe(resp => {
        this.packageCategoryId = resp.json();
      });
  }
  getSearchItemPackageGroup(evn) {
    console.log("Package group ID==> ", this.itemSearchCriteriaModel.packageGroupId);
    //console.log("bizunit ID==> ", this.itemSearchCriteriaModel.bizUnitId);
    this.itemsMntService.getSearchItemPackageGroup(this.itemSearchCriteriaModel)
      .subscribe(resp => {
        this.packageGroupId = resp.json();
      });
  }
  isformvalid() {
    if (this.editItemForm.value.packageCategoryId |
      this.editItemForm.value.packageGroupId |
      this.editItemForm.value.beverageCategoryId) {
      console.log("all field are valid");
      this.isvalidForm = true;
    } else {
      console.log("enter any one of the feild");
      this.isvalidForm = false;
    }
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myForm;
  buttonString:string;
  constructor(public fb:FormBuilder,private ps:ProductService) {
   
   
    this.myForm=  this.fb.group({
        name:['',[Validators.required,Validators.minLength(4)]],
        description:['',[Validators.required,Validators.minLength(20)]],
        type:['Fruits'],
        qty:['',[Validators.required]],
        price:['',[Validators.required]],
        imagename: [null,[Validators.required]]
      });
      this.buttonString = "Add Product"
    
    
  }

  
  uploadFile1(event) {
    if (!event.target.files) return;
    else
    {
    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.patchValue({
      imagename: file
    });
    this.myForm.get('imagename').updateValueAndValidity()
  }
  }


  ngOnInit(): void {
  }
  
  addProduct(){
    debugger;
    var formData: any = new FormData();
    formData.append("name",this.myForm.get('name').value);
    formData.append("description",this.myForm.get('description').value);
    formData.append("price",this.myForm.get('price').value);
    formData.append("qty",this.myForm.get('qty').value);
    formData.append("type",this.myForm.get('type').value);
    formData.append("imagename",this.myForm.get('imagename').value);
  if(this.myForm.data == null)
    this.ps.addProduct(formData).subscribe(
      ()=>{alert("Data Submitted");},
      ()=>{alert("Error Storing information")}
    )
   else{          
     formData.append("id",this.myForm.data.id)
   this.ps.updateProduct(formData).subscribe(
    ()=>{alert("Data Submitted");},
    ()=>{alert("Error Storing information")}
   )
   }
   
  }
}

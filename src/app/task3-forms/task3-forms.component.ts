import { Component } from '@angular/core';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { noSpace } from '../validators/noSpace.validators';
@Component({
  selector: 'app-task3-forms',
  templateUrl: './task3-forms.component.html',
  styleUrls: ['./task3-forms.component.css']
})
export class Task3FormsComponent {
  form:any
  company:any
  constructor(fb:FormBuilder){
    // using form builder 
    // instead of creating form group,form control instances, getter everytime we use fb.group,control
    this.company= fb.group({
      companyname:['',[Validators.required,Validators.minLength(4)]],
      role:['',[Validators.required,Validators.minLength(4)]],
      companyaddress:fb.group({
        street:[],
        city:[],
        pincode:[]        
      }),
      projects:fb.array([]),
    })



    // using form group,form control 
    this.form = new FormGroup(
      {
        namef :new FormControl('',[Validators.required,Validators.minLength(4),noSpace.noSpaceValidations]),
        emailf: new FormControl('',[Validators.required,Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")]),
        address: new FormGroup({
          flatno:new FormControl(),
          area:new FormControl(),
          pincode: new FormControl(),
        }),
        skillsf:new FormArray([])
      }
    );
  }

  get namefun(){
    return this.form.get('namef');
  }

  get emailfun(){
    return this.form.get('emailf')
  }

  get addressfun(){
    return this.form.get('address')
  }

  onSubmit(f:NgForm){
    console.log("form details",f.value,f)
  }
  onChange(value:any){
    console.log(value)
  }

  onSubmitForm(){
    console.log(this.form)
  }

  addSkills(skill:HTMLInputElement){
    (this.form.get('skillsf') as FormArray).push(new FormControl(skill.value))
    skill.value=""
    console.log(this.form.value)
  }

  get skillslist(){
    // console.log(this.form.skillsf as FormArray,this.form.controls)
    return this.form.get('skillsf') as FormArray
  }

  delskill(ind:number){
    (this.form.get('skillsf') as FormArray).removeAt(ind)
  }

  saveCompanyDetails(){
    console.log(this.company.value)
  }

  get companyName(){
    return this.company.get('companyname')
  }

  get role(){
    return this.company.get('role')
  }

  addProject(project:HTMLInputElement){
    (this.company.get('projects') as FormArray).push(new FormControl(project.value))
    console.log(this.company)
    project.value=''
  }

  get projects(){
    return (this.company.get('projects') as FormArray)
  }

}

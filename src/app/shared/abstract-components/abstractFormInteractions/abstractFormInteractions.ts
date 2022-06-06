import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { TranslocoService } from "@ngneat/transloco";
import { GeneralInteractions } from "../../abstract-classes/general-interactions/general-interactions";

@Component({ template: '' })
export class AbstractFormInteractions<T = any> extends GeneralInteractions {

  form!: FormGroup;

  constructor(transloco:TranslocoService) {
    super(transloco);
  }

  disableForm():void{
    Object.keys(this.form.controls).forEach((key:string)=>this.form.get(key)?.disable());
  }

  clearField(key:string):void{
    this.form.get(key)?.setValue('');
  }

  isFilled(key:string):boolean{
    const control:AbstractControl = this.form.get(key)!;
    return !control.disabled && !this.isEmpty(control.value);
  }

}

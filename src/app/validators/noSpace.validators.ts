import { ValidationErrors,AbstractControl } from "@angular/forms";

export class noSpace{
    static noSpaceValidations(control:AbstractControl):ValidationErrors|null{
        let controlValue = control.value as string;
        if(controlValue.includes(' ')){
            return{noSpaceValidator:true};
        }
        else if(controlValue.includes('@')){
            return{noSpecialSymbolValidator:true}
        }
        else{
            return null
        }
    }
}
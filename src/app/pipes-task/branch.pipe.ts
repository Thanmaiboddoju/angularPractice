import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branch'
})
export class BranchPipe implements PipeTransform {

  transform(value: unknown, branchvalue:any): unknown {
    
    
      switch(branchvalue){
        case "CS": return "COMPUTER SCIENCE ENGINEERING"+"\nSECTION-"+value;
        case "CE": return "CIVIL ENGINEERING"+"\nSECTION-"+value;
        case "CHEM": return "CHEMICAL ENGINEERING"+"\nSECTION-"+value;


        default:return ""
      }
    
    // "CSE-"+value;
  }

}

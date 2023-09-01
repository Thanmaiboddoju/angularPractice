import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name:"year"
})

export class YearPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return("N17"+value)
    }
}
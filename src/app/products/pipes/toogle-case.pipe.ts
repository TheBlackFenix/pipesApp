import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tooglecase'
})

export class ToogleCasePipe implements PipeTransform {
    transform(value: string, toUpper : boolean = false): string {
        return toUpper == true ? value.toUpperCase() : value.toLowerCase()
    }
}
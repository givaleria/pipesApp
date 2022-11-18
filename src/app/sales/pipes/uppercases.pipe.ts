import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'customUppercase'
})

export class UppercasesPipe implements PipeTransform{
  transform(value: string, onUppercases: boolean = true): string {

    return (onUppercases) ? value.toUpperCase() : value.toLowerCase();

  }
}

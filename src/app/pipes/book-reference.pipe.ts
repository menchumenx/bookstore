import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookReference'
})
export class BookReferencePipe implements PipeTransform {

  transform(value: string,): string {

    let result :string;
    result =  'Ref:  ' + value

    return result;
  }

}

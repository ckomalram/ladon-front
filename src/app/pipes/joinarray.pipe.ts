import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinarray'
})
export class JoinarrayPipe implements PipeTransform {

  transform(arr: any[] ): string {
    return arr.join(',');
  }

}

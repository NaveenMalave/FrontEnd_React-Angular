import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value =='Male'){
      return "Mr."+ args[0];
    }else{
      return "Ms."+ args[0];
    }
    
  }

}

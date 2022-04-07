import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {
    let pass:string = '';
    if(activar == true) {
      for(let i = 1; i <= value.length; i++){
        pass += '*';
      }
      return pass;
    } else {
      return value;
    }
  }

}

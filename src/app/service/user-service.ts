import {Observable, of} from "rxjs";

export class UserService {

   emailListMock = [
     'email_1@gmail.com',
     'email_2@gmail.com',
     'email_3@gmail.com',
     'email_4@gmail.com',
     'email_5@gmail.com',
     'email_6@gmail.com',
   ]

  isEmailExist(email: string): Observable<any> {
     // we can make API call here instead.
     const isEmailExist = this.emailListMock.indexOf(email) != -1;
     return of(isEmailExist);
  }
}

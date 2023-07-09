import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:9090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  // public login(loginData:any) {
  //   return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
  //     headers: this.requestHeader,
  //   });
  // }

  public login(loginData: any) {
    return this.httpclient.post<any>(this.PATH_OF_API + '/api/auth/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }


  // public login(loginData: any) {
  //   return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
  //     headers: this.requestHeader,
  //   }).pipe(
  //     map(response => {
  //       // Extract the JWT token from the response
  //       const jwtToken = response.jwtToken;
        
  //       // Optionally, you can extract and process the user information as well
  //       const user = response.user;
        
  //       // Return the extracted data as an object
  //       return {
  //         jwtToken,
  //         user
  //       };
  //     })
  //   );
  // }
  

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: any) {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();
  
    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
  
    return isMatch;
  }
  
}

import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {


  
  isSubmitted:boolean=false;

  ngOnInit(): void {
    this.loginForm = this.formbuider.group({
      email: ['guptashruti233@gmail.com', Validators.required],
      password: ['Shruti@123', Validators.required]
    })
  }

  passwordType: string = 'password';
  visibilityIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;

  

  constructor(private formbuider: FormBuilder,
    private authService: AuthService,
   private cookieService: CookieService,
    private route:Router,
    private toastrService: ToastrService) {   
    }
   
  showHidePassword() {
    this.passwordType = (this.passwordType == 'password') ? 'text' : 'password';
    this.visibilityIcon = (this.passwordType == 'text') ? 'fa-eye' : 'fa-eye-slash';
  }

  onSubmit( ){
    if(this.loginForm.valid){
      // send data to database
      this.isSubmitted=true;
      this.authService.login(this.loginForm.value).subscribe({
        next:(response)=>{
          console.log("login response",response);
          this.authService.patientId=response.id;
          this.authService.setAuthCookieAndUser(response);
          this.toastrService.success("Login successfull!");
          this.route.navigateByUrl('/main');
        
        },
        error:(res)=>{
          const errObject=res.error.errors
          let errorsArray=errObject[""] as Array<string>;
          for (let index = 0; index < errorsArray.length; index++) {    
            this.toastrService.error(errorsArray[index]);
          }
          this.isSubmitted=false;
          
        }
      })
     // console.log(this.loginForm.value);
    }
    else{
      console.log("form is not valid");
      this.validateAllFormFields(this.loginForm);
    }
  }



  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {

      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true })
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


}

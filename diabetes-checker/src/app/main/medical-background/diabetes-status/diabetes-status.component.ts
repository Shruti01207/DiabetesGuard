import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { StartConversation } from 'src/app/shared/models/start-conversation-response.model';
import { BotService } from 'src/app/shared/services/bot.service';
import { ChatService } from 'src/app/shared/services/chat.service';
import { CommonDataService } from '../../services/common-data.service';

@Component({
  selector: 'app-diabetes-status',
  templateUrl: './diabetes-status.component.html',
  styleUrls: ['./diabetes-status.component.css']
})
export class DiabetesStatusComponent implements OnInit {

  // reactive form

  diabetesStatus!: FormGroup;
  chatServiceSubcription!: Subscription;
  loader: boolean=false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private chatService: ChatService,
    private botService: BotService,
    private commonService:CommonDataService) {


  }



  ngOnInit(): void {
    console.log("oninit called");

    this.diabetesStatus = this.fb.group(
      {
        isDiabetic: ['yes', Validators.required],
        diabetesType: ['not-sure', Validators.required]
      }
    );
    console.log("current patient", this.authService.patientId);

    
    // let res = this.chatService.startConversation();
    // this.sendData();


  }

  sendData() {
    console.log("send data called!");

    this.botService.getTriggerObservable(0).subscribe({
      next: (res) => {
        console.log("res ds", res);
        if (res == true) {
          this.loader=true;
          this.intializeBotVariables('diabetes status');
        }
      }
    })
  }

  Save() {
    if (this.diabetesStatus.valid) {
      console.log("this.diabetesStatus.value=", this.diabetesStatus.value);
    }
    else {
      console.warn("Invalid form");
    }

  }

  intializeBotVariables(topicName: string) {
    console.log("intializeBotVariables(topicName: string)");
    this.chatService.messageRequest.Message = topicName;
    setTimeout(()=>{
      this.chatService.message();
      this.passValues();
    },12000)
  
  }

  passValues() {

    let val= new Array<string>(3);
    val[0]="Shruti Gupta";
    val[1]=this.diabetesStatus.get('isDiabetic')?.value;
    val[2]=this.diabetesStatus.get('diabetesType')?.value;
    for (let i = 0; i < 3; i++) {
        setTimeout(()=>{
         this.chatService.messageRequest.Message=val[i];
         this.chatService.message( );
        },12000)
    }
  }

  changeDiaStatus(){
    this.commonService.setDiaStatus(this.diabetesStatus.get('isDiabetic')?.value);
  }

}

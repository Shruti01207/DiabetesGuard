import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { MessageInfo } from 'src/app/shared/models/message.model';
import { SendMessageRequest } from 'src/app/shared/models/send-message-request.model';
import { StartConversation } from 'src/app/shared/models/start-conversation-response.model';
import { BotService } from 'src/app/shared/services/bot.service';
import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit, AfterViewChecked {


  @ViewChild('chatContainer', { static: true }) chatContainer?: ElementRef;

  private token?: string;
  private conversationId?: string;

  private previousResponse: number = -1;
  public sub?: any;



  constructor(public chatService: ChatService,
    public botService: BotService) {

  }
  ngAfterViewChecked(): void {
    this.scrollChatContainer();
  }

  

  
  print() {
    console.log("message", this.chatService.messageRequest.Message);
  }

  ngOnInit() {
 
  }


  getDirectLineToken() {
   this.chatService.getToken().subscribe({
      next: (response) => {
        console.log("token", response);
      }
    })
  }

 

  message() {
    let messageResponse = this.chatService.message();

  }

  scrollChatContainer() {

    var messageBody = document.querySelector('#chat-container') as Element;
    messageBody.scrollTop = messageBody.scrollHeight;

  }





  refreshToken() {
    console.log("token", this.chatService.messageRequest.Token);
    this.chatService.refreshToken(this.chatService.messageRequest.Token as string).subscribe({
      next: (response) => {
        console.log("token refreshed", response);
      }
    })
  }

  refreshTokenFunc() {
    interval(3500).subscribe(x => {
      //this.refreshToken( );
    });
  }






  selectSuggestion(i: number, j: number) {
    this.chatService.messageRequest.Message = this.botService.messages[i].actions[j].title;
    this.message();

  }




}

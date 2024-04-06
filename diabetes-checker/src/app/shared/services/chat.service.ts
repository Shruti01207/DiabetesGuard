import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BotResponse } from '../models/getbot-response.model';
import { SendMessageRequest } from '../models/send-message-request.model';
import { StartConversation } from '../models/start-conversation-response.model';
import { TokenResponse } from '../models/token-response.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BotService } from './bot.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public messageRequest: SendMessageRequest;
  public token:string="";
  public conversationId: string= "";
  chatServiceSubcription: any;

  constructor(private http: HttpClient,
    private botService: BotService) {
    this.messageRequest = {
      ConversationId: this.conversationId,
      Message: "",
      Token: this.token
    }
  }

  getToken(): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(`${environment.apiBaseUrl}/api/Bot/token`);
  }

  getTokenAndStartConversation(): Observable<StartConversation> {
    return this.http.post<StartConversation>(`${environment.apiBaseUrl}/api/Bot/conversation`, '');
  }

  sendMessage(request: SendMessageRequest): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/Bot/user_message`, request);
  }

  getBotResponse(request: BotResponse): Observable<any> {
    return this.http.post<any>(`${environment.apiBaseUrl}/api/Bot/bot_message`, request);
  }

  refreshToken(currentToken: string): Observable<any> {

    const headers = { 'Authorization': 'Bearer ' + currentToken }
    return this.http.post<any>('https://directline.botframework.com/v3/directline/tokens/refresh', '', { headers });

  }

  async startConversation(): Promise<StartConversation | undefined> {
    this.chatServiceSubcription = this.getTokenAndStartConversation().
      subscribe({
        next: async (response) => {
          console.log(response);
          this.messageRequest.Token = response.token;
          this.token=response.token;
          this.messageRequest.ConversationId = response.conversationId;
          this.conversationId=this.conversationId;
          console.log("this.messageRequest",this.messageRequest);
          
          // //  await this.message();
          return response;
        }
      });
    return undefined;
  }

  message() {

    this.botService.messages.push({ text: this.messageRequest.Message, sender: "user", type: "text", actions: [] });
   
    console.log("this.messageRequest",this.messageRequest);
    
    this.chatServiceSubcription = this.sendMessage(this.messageRequest).
      subscribe({
        next: (response) => {
          console.log("message posted", response);
          this.messageRequest.Message = "";
          //this.botResponse();

          //polling interval
          setTimeout(() => {
            console.log("timeout");
            this.botResponse();
          }, 4000);
         
        },
        error: (response) => {
          console.log(response);
        }
      })


  }


  botResponse() {

    this.chatServiceSubcription = this.getBotResponse({
      token: this.messageRequest.Token,
      conversationId: this.messageRequest.ConversationId
    }).subscribe({
      next: (response) => {
        console.log("bot-response", response);
        this.botService.getNextAction(response); 
      }
    })

  }

}

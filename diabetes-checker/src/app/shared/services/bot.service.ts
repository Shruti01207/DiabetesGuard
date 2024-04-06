import { Injectable } from '@angular/core';
import { MessageInfo } from '../models/message.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {



  isBotDataSaved: BehaviorSubject<boolean>[] = [];
  private previousResponse: number = -1;
  messages: MessageInfo[] = [
    {
      text: '',
      sender: 'bot',
      type: 'actions',
      actions: [{ title: "What is Diabetes" }, { title: 'What is cause of diabetes' }]

    }
  ];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.isBotDataSaved.push(new BehaviorSubject<any>(false));
    }
  }




  getNextAction(response: any) {

    for (let i = (this.previousResponse + 1); i < response?.length; i++) {
      //this.messages.push({ text: response[i]?.text ? response[i].text : response[i].speak, sender: "bot" });

      if (response[i].text) {
        this.messages.push({
          text: response[i].text,
          sender: 'bot',
          type: "text",
          actions: []
        });
      }
      else if (response[i].speak) {
        this.messages.push({
          text: response[i].speak,
          sender: 'bot',
          type: "text",
          actions: []
        });
      }

      if (response[i].suggestedActions) {
        this.messages.push({
          text: ' ',
          sender: 'bot',
          type: "actions",
          actions: response[i].suggestedActions.actions
        });
      }

    }
    this.previousResponse = response.length - 1;
    console.log("this.messages", this.messages);

  }
  triggerFunction(currIndex: number) {
  
    console.log("triggerFunction(currIndex: number)");
    this.isBotDataSaved[currIndex].next(true);
  }
  getTriggerObservable(currIdx: number) {
    return this.isBotDataSaved[currIdx].asObservable();
  }


}

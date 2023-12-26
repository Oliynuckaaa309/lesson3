import { Component, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';



@Component({
  selector: 'app-lesson03',
  standalone: true,
  imports: [ Child1Component, FormsModule ],
  templateUrl: './lesson03.component.html',
  styleUrl: './lesson03.component.css'
})
export class  Lesson03Component {
public countOfTasks:number=0;

public parentData:string=''
public taskStatus:boolean=false;
parentItems:{nameTask:string, statusTask:boolean}[]=[];


addInfo():void{
  if(this.parentData!=''){
    this.parentItems.push({nameTask: this.parentData, statusTask:this.taskStatus });
    this.countOfTasks++;
  }
this.parentData='';


}

changeCounterHandle(count:number){
  this.countOfTasks=count;
}


}

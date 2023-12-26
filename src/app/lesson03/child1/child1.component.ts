import { Component, EventEmitter, Input, Output, OnChanges, OnInit, DoCheck, SimpleChanges, ChangeDetectorRef, AfterContentInit,  AfterContentChecked, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component   {
  public isOpen:boolean=false;
  public changesInfo:string="";
  public indexSave!:number;
  @Input() countTask!:number;
  @Input() fromParent: { nameTask: string; statusTask: boolean }[] = [];

  @Output() changeCounter=new EventEmitter<number>();
  deleteTask(index: number) {
    if (index >= 0 && index < this.fromParent.length && this.countTask > 0  ) {
      this.changeCounter.emit(--this.countTask);
      this.fromParent.splice(index, 1);
    }
  }
  saveChanges(index:number){
    this.indexSave=index;
    this.isOpen=true;
    this.changesInfo=this.fromParent[this.indexSave].nameTask;
  }
  saveNewTasks(){
  this.fromParent[this.indexSave].nameTask=this.changesInfo;
  this.isOpen=false;

  }
 
}
 


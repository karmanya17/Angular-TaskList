import { Component, OnInit } from '@angular/core';
import { task } from '../model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  taskvalue="";
  currDay=(new Date()).getDay();
  constructor() {

  }

  ngOnInit(): void {
  }

  taskArray:Array<task> = [];
  addTask(){
    

    let taskobject={
      title:this.taskvalue,
      status:true
    }
    this.taskArray.push(taskobject);
    this.taskvalue='';

  }
  deleteTask(index:number){
    this.taskArray.splice(index,1);
  }

  completeTask(index:number){
    if(this.taskArray[index].status){
      this.taskArray[index].status=false;
    }
    else{
      this.taskArray[index].status=true;
    }
    
  }
  removeAll(){
    for(let i=0;i<this.taskArray.length;i++)
    {
      if(this.taskArray[i].status==false)
      {
        console.log(this.taskArray[i].status);
        this.taskArray.splice(i,1);
      }
    }
  }
  totalTask(){
    return this.taskArray.length;
  }
}

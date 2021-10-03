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

  taskArray:Array<task> = [
    {
      title:"default task",
      status:true
    }
  ];
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
    console.log(this.taskArray);
    let completeArr:number[]=[];
    this.taskArray.forEach((task,index)=>{
      if(task.status==false)
      {
        completeArr.push(index);
      }
    });
    for(var i=completeArr.length-1;i>=0;i--)
    {
      this.taskArray.splice(completeArr[i],1);
    }
  }
  totalTask(){
    return this.taskArray.length;
  }
}

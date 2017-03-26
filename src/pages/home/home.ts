import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Array<Object> = [];


  constructor(public navCtrl: NavController) {
    this.tasks = [
      { title: 'Apple', status: 'open' },
      { title: 'Papaya', status: 'open' },
      { title: 'Banana', status: 'open' },
      { title: 'Orange', status: 'open' }
    ];
    
  }

  addItem() {
    let newTask: string = prompt("เพิ่มรายการ");
    // alert(newTask);
    if (newTask !== null) {
      this.tasks.push({ title: newTask, status: 'open' });

    }
  }

  editItem(i:number,task:any) {
    console.log(task);
    let editTask:string=prompt("แก้ไขรายการ", task.title);
     this.tasks[i] = {title:editTask,status:'open'}
    
  }

  deleteItem(task: any) {
    let index = this.tasks.indexOf(task);
    // alert(index);
    if (index > -1) {
      if(confirm('ยืนยันการลบ?'))
      this.tasks.splice(index, 1);


    }
  }

}

import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')
  constructor() { }

  ngDoCheck() {
    this.localStorage();
  }

  deleteTask(i: number){
    this.taskList.splice(i, 1)
  }

  deleteAllTask(){
    if(this.taskList){
      Swal.fire({
        title: 'Tem certeza que deseja deletar tudo?',
        text: "Não será possível reverter isto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#AF7EEB',
        cancelButtonColor: '#FF002E',
        confirmButtonText: 'Sim, apague!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.taskList = []
          Swal.fire(
            'Apagado!',
            'Sua lista foi eliminada.',
            'success'
          )
        }
      })
    }
  }

  setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  validationInput(event: string, i: number){
    if(!event.length){
      Swal.fire({
        title: 'A Task está vazia, deseja deletar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#AF7EEB',
        cancelButtonColor: '#FF002E',
        confirmButtonText: 'Sim!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteTask(i)
          Swal.fire(
            'Apagado!',
            'success'
          )
        }
      })
    }
  }

  localStorage(){
    if(this.taskList){
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}

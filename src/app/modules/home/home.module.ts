import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonDeleteAllComponent } from './components/button-delete-all/button-delete-all.component';
import { InputAddItensComponent } from './components/input-add-itens/input-add-itens.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItensComponent,
    TaskListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component'
import { ItemEditComponent } from './item-edit/item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/item-list', pathMatch: 'full' },
  {
    path: 'item-list',
    component: TodoListComponent
  },
  {
    path: 'item-add',
    component: ItemEditComponent
  },
  {
    path: 'item-edit/:id',
    component: ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

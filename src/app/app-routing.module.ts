import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ListarComponent } from './pages/listar/listar.component';


const routes: Routes = [
  {
    path: "",
    component: ListarComponent,
  },
  {
    path: "movie/listar",
    component: ListarComponent,
  },
  {
    path: "movie/cadastrar",
    component: CadastrarComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'NBA',
    children: [
      {
        path: 'Main',
        loadChildren: () => import('../app/Body/MainPageModule/Module/main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'Players',
        loadChildren: () => import('../app/Body/PlayersModule/Module/players/players.module').then(m => m.PlayersModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/NBA/Main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/NBA/Main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

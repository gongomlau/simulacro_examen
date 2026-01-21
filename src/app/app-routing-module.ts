import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostList } from './components/post-list/post-list';
import { PostForm } from './components/post-form/post-form';

const routes: Routes = [
    { path: 'posts', component: PostList },
    { path: 'posts/new', component:PostForm },
    { path: 'posts/edit/:id', component:PostForm },
    { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

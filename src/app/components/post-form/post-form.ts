import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



import { PostService } from '../../services/post';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-form',
  standalone: false,
  templateUrl: './post-form.html',
  styleUrl: './post-form.css',
})
export class PostForm implements OnInit{

    constructor(
        private postService:PostService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    post:Post = {
        title: '',
        body: ''
    };
    isEdit = false;

    ngOnInit(): void {
        const id= this.route.snapshot.paramMap.get('id');
        if(id) {
            this.isEdit = true;
            this.postService.getPostById(+id).subscribe(data=> {
                console.log('POST:', data);
                this.post = data});
        }
    }

    onSubmit(): void {
        if (this.isEdit && this.post.id) {
            this.postService.updatePost(this.post.id, this.post).subscribe(()=>this.router.navigate(['/posts']));
        } else {
            this.postService.createPost(this.post).subscribe(() => this.router.navigate(['/posts']));
        }
    }
}

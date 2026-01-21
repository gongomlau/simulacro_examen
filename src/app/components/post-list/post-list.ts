import { Component,OnInit } from '@angular/core';

import { PostService } from '../../services/post';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})

export class PostList implements OnInit{
  $posts!: Observable<Post[]>;

  constructor(private postService: PostService) {}

    ngOnInit (): void {
       this.$posts = this.postService.getPosts();
            console.log("Posts cargados:", this.$posts);
        
    }

    borrar(post: Post):void {
        this.postService.deletePost(post.id!);
        console.log("Post borrado:", post);
    }

}

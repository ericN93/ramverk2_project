import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from "../_services/firebase.service";
import { Router,ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeletePostComponent implements OnInit {

  id: any;
  thePost: any[];


  constructor(private firebaseService: FirebaseService,
       private router: Router,
       private route: ActivatedRoute) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.firebaseService.getPostDetails(this.id).subscribe(post => {
        console.log(post)
        console.log(typeof post)
        this.thePost = post;
        console.log(this.thePost)
        /*this.thePost.title = post.title;
        this.thePost.description = post.description;
        this.thePost.points= post.points;*/
      });
    }

  removePost(){
    this.firebaseService.deletePost(this.id);
    this.router.navigate(['first'])
  }

}

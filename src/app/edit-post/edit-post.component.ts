import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseService } from "../_services/firebase.service";
import { Router,ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditPostComponent implements OnInit {

  id: any;
  thePost: any[];


  constructor( private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getPostDetails(this.id).subscribe(post => {
    this.thePost = post;
    });
  }

  submitEdit(){
    let post = this.thePost

    this.firebaseService.updatePost(this.id, post);
    this.router.navigate(['/first'])
  }

}

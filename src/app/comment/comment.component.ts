import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../_services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentForm: FormGroup = this.formBuilder.group({
    titre: ['', Validators.required],
    contenu: ['', Validators.required]
  });

  constructor(private commentService: CommentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  sendComment() {
    return this.commentService.addComment(this.commentForm.value).subscribe(console.log)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { articleInterface } from '../interfaces/articleInterface';
import { commentInterface } from '../interfaces/commentInterface';
import { userInterface } from '../interfaces/userInterface';
import { ArticleService } from '../_services/article.service';
import { CommentService } from '../_services/comment.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articleForm: FormGroup = this.formBuilder.group({
    titre: ['', Validators.required],
    contenu: ['', Validators.required]
  });




  constructor(private articleService: ArticleService, private formBuilder: FormBuilder) { }

  articleList?: Array<articleInterface>
  userList?: Array<userInterface>
  commentList?: Array<commentInterface>
  userID?: number
  tabComment: any
  article?: articleInterface[]

  ngOnInit(): void {

    //list USER
    let CurrentUser: any = localStorage.getItem("auth-user")
    CurrentUser = JSON.parse(CurrentUser)
    this.userID = CurrentUser.id

    // LIST Article
    this.articleService.getArticleList().subscribe({
      next: data => {

        this.articleList = JSON.parse(data)

        let tabUser: any = localStorage.getItem("users")
        tabUser = JSON.parse(tabUser)
        this.userList = tabUser

        this.articleList?.forEach(element => {
          let articleID: number = element.id_article
          this.articleService.getCommentFromArticle(articleID).subscribe({
            next: data => {

              console.log(data)
            }
          })
        });
      }
    })




  }
  onSubmit() {

    // stop here if form is invalid
    if (this.articleForm.invalid) {
      return console.log('error form');
    }

    return this.articleService.addArticle(this.articleForm.value).subscribe(console.log)

  }

  deleteArticle(id: number) {
    return this.articleService.deleteArticle(id).subscribe(console.log)
  }


}

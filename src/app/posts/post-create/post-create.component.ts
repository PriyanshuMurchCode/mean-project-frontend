import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  postForm: FormGroup;

  @Output() postAdded = new EventEmitter();

  constructor(){
    this.postForm = new FormGroup({
      'title' : new FormControl(''),
      'content' : new FormControl('')
    })
  }


  onAddPost(){
    const post = {
      title: this.postForm.value['title'],
      content:  this.postForm.value['content']
    }
    console.log(post)
    this.postAdded.emit(post);
  }
}

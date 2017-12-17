import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: '../templates/user.template.html',
  providers:[PostsService],

})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];

constructor(private postsService: PostsService){
  this.name = 'Harshit Bhatt';
  this.email='harshitb95@gmail.com';
  this.address={
    street:"H No. 556 Sector 6",
    city:"Panchkula",
    State:"Haryana"
  };

  this.hobbies=['Singing','Coding','Writing','Story-Telling'];
  this.showHobbies=false;

this.postsService.getPosts().subscribe(posts=>
  {
    this.posts=posts;
  }
);
}
toggleHobby(){
this.showHobbies=!this.showHobbies;
}

addHobby(hobby:string){
this.hobbies.push(hobby);
}

deleteHobby(index:any){
this.hobbies.splice(index,1);
}
 }

 interface address{
   street:string;
   city:string;
   State:string;
 }

 interface Post{
   id:number;
   userid:number;
   title:string;
   body:string;
 }

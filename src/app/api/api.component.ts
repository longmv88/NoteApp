import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { DataService } from '../Services/data.service';
import { User } from '../user.model';



@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
public users: User[] = [];
items: MenuItem[] =[];
public selectedUser: any;
public newUser: any;

cancelAddUserMessage() {
  this.toastrService.success("Ban da Cencel thanh cong", "Success");
}
saveAddUserMessage() {
  this.toastrService.success("Ban da Save thanh cong", "Success");
}

  constructor(private dataService: DataService, private toastrService: ToastrService) { }
  public editUser(user: any) {
    this.selectedUser = user;
  }
  ngOnInit(): void {
    this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
    this.dataService.getComments().subscribe((data) => {
     console.log(data);
     this.users = data;
    })
  }
public getSelectedClass(user: User): string{
  if (!this.selectedUser){
     return '';
  }
  return this.selectedUser.id === user.id ? 'Selected' : 'notSelected';
}
public addUser(): void{
  console.log('addUser');
  this.newUser = {
    id: 0,
    firstName: '',
    lastName: '',
    email: 'otjsjjghg@gmail.com',
    mobile: '343434343',
    salary: '43434343400',
  }
}
public cancelAddUser(): void {
  this.newUser = undefined;
  this.cancelAddUserMessage()
}
public saveUser(): void {
  // this.messageService.add({
  //   severity:'success', 
  //   summary:'Service Message', 
  // //   detail:'Via MessageService'
  // });
  console.log ('save Note', this.newUser);
  if (!this.newUser){
    return;
  }
  this.dataService.postComments(this.newUser).subscribe((user)=>{
    console.log('result', user);
    this.users?.push(user);
    this.newUser = undefined;
    this.saveAddUserMessage()
  })
}

}

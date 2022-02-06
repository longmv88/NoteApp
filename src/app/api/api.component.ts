import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService: DataService) { }
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
    email: '',
    mobile: '',
    salary: '',
  }
}
public cancelAddUser(): void {
  this.newUser = undefined;
}


}

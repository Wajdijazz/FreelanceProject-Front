import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}



const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      }
   
    ],
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'employees',
        short_label: 'B',
        name: 'Employees',
        type: 'sub',
        icon: 'ti-receipt',
        children: [
          {
            state: 'department',
            type: 'link',
            name: 'Departments',
          }, {
            state: 'person',
            type: 'link',
            name: 'Persons',
          }
        ]
      },
      {
        state: 'item',
        short_label: 'B',
        name: 'Item',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'mouvement',
        short_label: 'B',
        name: 'Mouvement',
        type: 'link',
        icon: 'ti-receipt'
      }
  
    ]
  },
  {
    label: 'Login and Registration ',
    main: [
  
      {
        state: 'authentication',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
      }
    ]
  },
];
const MENUITEMSSUPERADMIN = [

  {
    label: 'Tables',
    main: [
      {
        state: 'company-client',
        short_label: 'C',
        name: 'Clients',
        type: 'link',
        icon: 'ti-receipt'
      },    
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
      }
  
    ]
  }
];
@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
  getMenuSuperAdmin(): Menu[] {
    return MENUITEMSSUPERADMIN;
  }

}

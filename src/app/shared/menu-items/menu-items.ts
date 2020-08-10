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
  main: MainMenuItems[];
}



const MENUITEMS = [
  {
   
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
   
    ],
  },
  {
  
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
        state: 'user',
        short_label: 'U',
        name: 'Users',
        type: 'link',
        icon: 'ti-user'
      },
      {
        state: 'provider',
        short_label: 'P',
        name: 'Providers',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'item',
        short_label: 'I',
        name: 'Items',
        type: 'sub',
        icon: 'ti-desktop',
        children: [
          {
            state: 'items',
            type: 'link',
            name: 'Items',
          }, {
            state: 'types',
            type: 'link',
            name: 'Types',
          }, {
            state: 'family',
            type: 'link',
            name: 'Families',
          }, {
            state: 'localisation',
            type: 'link',
            name: 'Localisations',
          }
        ]
      }
  
    ]
  },
  {
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

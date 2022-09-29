import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: {name: 'cil-speedometer'},
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Example',
    url: '/example',
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    name: 'Users',
    url: '/users',
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    name: 'Akun',
    url: '/akun',
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    name: 'Profile',
    url: '/profile',
    iconComponent: {name: 'cil-speedometer'},
  }
];

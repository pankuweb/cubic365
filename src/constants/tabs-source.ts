import AuthScreen from '../screens/auth/auth';
import HomeScreen from '../screens/home/home-screen';
import NoticesScreen from '../screens/notices/notices-screen';

export const tabs = [
  {
    tabBarLabel: 'Home',
    tabBarIcon: 'home-outline',
    headerShown: false,
    name: 'Home',
    component: HomeScreen,
  },
  {
    tabBarLabel: 'Notices',
    tabBarIcon: 'notifications-outline',
    headerShown: false,
    name: 'Category',
    component: NoticesScreen,
  },
  {
    tabBarLabel: 'New Request',
    tabBarIcon: 'add-circle-outline',
    headerShown: false,
    name: 'Search',
    component: HomeScreen,
  },
  {
    tabBarLabel: 'Requests',
    tabBarIcon: 'list-outline',
    headerShown: false,
    name: 'Cart',
    component: HomeScreen,
  },
  {
    tabBarLabel: 'Profile',
    tabBarIcon: 'person-circle-outline',
    headerShown: false,
    name: 'Profile',
    component: AuthScreen,
  },
];

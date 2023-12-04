import AuthScreen from '../screens/auth/auth';
import HomeScreen from '../screens/home/home-screen';
import NoticesScreen from '../screens/notices/notices-screen';
import ProfileScreen from '../screens/profile/profile-screen';

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
    headerShown: 'Notices',
    name: 'Category',
    component: NoticesScreen,
  },
  {
    tabBarLabel: 'New Request',
    tabBarIcon: 'add-circle-outline',
    headerShown: false,
    name: 'Search',
    component: AuthScreen,
  },
  {
    tabBarLabel: 'Requests',
    tabBarIcon: 'list-outline',
    headerShown: false,
    name: 'Requests',
    component: HomeScreen,
  },
  {
    tabBarLabel: 'Profile',
    tabBarIcon: 'person-circle-outline',
    headerShown: true,
    name: 'Profile',
    component: ProfileScreen,
  },
];

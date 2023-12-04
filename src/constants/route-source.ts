import SplashScreen from '../screens/splash/splash';
import AuthScreen from '../screens/auth/auth';
import DashboardScreen from '../screens/dashboard/dashboard-screen';
import HomeScreen from '../screens/home/home-screen';
import NoticesScreen from '../screens/notices/notices-screen';
import ProfileScreen from '../screens/profile/profile-screen';

export const routes = [
  {
    name: 'SplashScreen',
    title: 'SplashScreen',
    headerShown: false,
    component: SplashScreen,
  },
  {
    name: 'AuthScreen',
    title: 'AuthScreen',
    headerShown: false,
    component: AuthScreen,
  },
  {
    name: 'DashboardScreen',
    title: 'DashboardScreen',
    headerShown: false,
    component: DashboardScreen,
  },
  {
    name: 'HomeScreen',
    title: 'HomeScreen',
    headerShown: false,
    component: HomeScreen,
  },
  {
    name: 'NoticesScreen',
    title: 'NoticesScreen',
    headerShown: true,
    component: NoticesScreen,
  },
  {
    name: 'ProfileScreen',
    title: 'ProfileScreen',
    headerShown: true,
    component: ProfileScreen,
  },
];

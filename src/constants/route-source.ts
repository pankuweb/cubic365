import SplashScreen from '../screens/splash/splash';
import AuthScreen from '../screens/auth/auth';
import DashboardScreen from '../screens/dashboard/dashboard-screen';
import HomeScreen from '../screens/home/home-screen';
import NoticesScreen from '../screens/notices/notices-screen';
import ProfileScreen from '../screens/profile/profile-screen';
import AboutScreen from '../screens/about/about-screen';
import HelpScreen from '../screens/help/help-screen';
import ReportDetails from '../screens/report-detail/report-detail';
import ManageAccountScreen from '../screens/profile/manage-account/manage-account';

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
    headerShown: false,
    component: NoticesScreen,
  },
  {
    name: 'ProfileScreen',
    title: 'ProfileScreen',
    headerShown: true,
    component: ProfileScreen,
  },
  {
    name: 'About',
    title: 'AboutScreen',
    headerShown: true,
    component: AboutScreen,
  },
  {
    name: 'Help',
    title: 'HelpScreen',
    headerShown: true,
    component: HelpScreen,
  },
  {
    name: 'Details',
    title: 'ReportDetails',
    headerShown: true,
    component: ReportDetails,
  },
  {
    name: 'Manage Account',
    title: 'ManageAccountScreen',
    headerShown: true,
    component: ManageAccountScreen,
  },
];

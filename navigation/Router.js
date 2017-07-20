import { createRouter } from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import AgendaScreen from '../screens/AgendaScreen';
import ChecklistScreen from '../screens/ChecklistScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  calendar: () => CalendarScreen,
  agenda: () => AgendaScreen,
  checklist: () => ChecklistScreen,
  settings: () => SettingsScreen,
  rootNavigation: () => RootNavigation,
}));

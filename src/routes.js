import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Album from './pages/Album';
import Search from './pages/Search';
import { colors } from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Album,
      Search,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.secundary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
      },
    },
  ),
);

export default Routes;

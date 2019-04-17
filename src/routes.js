import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/Main';
import Product from './pages/Product';

const MainNavigation = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#7159C1',
      },
      headerTintColor: '#FFF',
    }),
  },
  Product: {
    screen: Product,
  },

});

const App = createAppContainer(MainNavigation);

export default App;

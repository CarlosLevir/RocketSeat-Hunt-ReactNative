import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

const MainNavigation = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: "#3F51B5"
            },
            headerTintColor: "#FFF"
        }),
    },
    Product: {
        screen: Product
    }
    
});

const App = createAppContainer(MainNavigation);

export default App;
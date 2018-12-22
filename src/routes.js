import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const MainNavigation = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }),
    }
    
});

const App = createAppContainer(MainNavigation);

export default App;
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/main';

const MainNavigation = createStackNavigator({
    Main: {
        screen: Main
    }
})

const App = createAppContainer(MainNavigation);

export default App;
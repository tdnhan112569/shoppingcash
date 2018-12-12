import Screen1 from './screen'
import Screen2 from './screen2'
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'

const productNavigator = createStackNavigator(
   {
      Clothes: {
        screen: Screen1,
        navigationOptions:{
          headerTitle: 'Product',
          headerStyle: {height: 30,},
          headerTitleStyle: { },
          headerTitleContainerStyle:{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom:20
          },
          
        } 
      }
   }
   ,{
   
    navigationOptions:{
     
    }

   }
)


const benifitNavigator = createStackNavigator(
  {
     Clothes: {
       screen: Screen2,
       navigationOptions:{
         headerTitle: 'Benifit',
         headerStyle: {height: 30,},
         headerTitleStyle: { },
         headerTitleContainerStyle:{
           alignItems: 'center',
           justifyContent: 'center',
           marginBottom:20
         },
         
       } 
     }
  }
  ,{
  
   navigationOptions:{
    
   }

  }
)


const navigationDrawer  = createDrawerNavigator (
  {
     Product: {
       screen: productNavigator,
     },
     Benifit: {
       screen: benifitNavigator
     }
     
  },
  {
      initialRouteName:'Product',
      drawerPosition:'left',

  }
);

const App = createAppContainer(navigationDrawer);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationDrawer />
//     );
//   }
// }
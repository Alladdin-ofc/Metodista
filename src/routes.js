import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Criando uma tab nagivator para definir as telas da aplicação
const Tab = createBottomTabNavigator();

// Importando os componentes da tela Home e Register
import Home from './pages/Home';
import Register from './pages/Register';
import ComingSoon from './pages/ComingSoon';

export default function Routes(){
  return (

    // Aqui é utilizado o Navigator como um container para as Screens
    // é definido que a tela inicial da aplicação sera a tela HOME e nessas telas, apliquei um display none na tabBar 
    <Tab.Navigator
      initialParams={{ initialScreen: 'Home' }}
      screenOptions={{ tabBarStyle: { display: 'none' } }}
    > 
    
      {/* Definição da tela, onde temos a name para sua identificação, o componente a ser renderizado, e que o nome da tela não irá aparecer no topo da tela */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}
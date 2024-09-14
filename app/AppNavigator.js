import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Admin from './Admin'
import ButtonOne from './buttons/ButtonOne'
import ButtonTow from './buttons/ButtonTow'
import ButtonThree from './buttons/ButtonThree'
import StudentsSubjects from './buttons/StudentsSubjects'
import ButtonFour from './buttons/ButtonFour'
import Message from './Message'
import StudentChat from './chat/StudentChat';
import ChatRoom from './chat/ChatRoom'


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="ButtonOne" component={ButtonOne} />
        <Stack.Screen name="ButtonTow" component={ButtonTow} />
        <Stack.Screen name="ButtonThree" component={ButtonThree} />
        <Stack.Screen name="StudentsSubjects" component={StudentsSubjects} />
        <Stack.Screen name="ButtonFour" component={ButtonFour} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="StudentChat" component={StudentChat} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

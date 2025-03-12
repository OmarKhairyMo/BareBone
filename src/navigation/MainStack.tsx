import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationKeys } from './NavigationKeys'
import { Home } from '../screens/home/Home'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { colors } from '../theme/colors'
import { useAuth } from '../context/AuthContext'
import { PetProfileScreen } from '../screens/profiles/PetProfileScreen'
export type MainStackParamList = {
  Home: undefined
  SingleProfile: { id: string }
}
const Stack = createNativeStackNavigator<MainStackParamList>()
const MainStack = () => {
  const {signOut} = useAuth()
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}>
      <Stack.Screen name={NavigationKeys.Home} options={{headerLeft: () =>  <SimpleLineIcons onPress={() => {
        signOut()
      }} name='logout' size={18} color={colors.white} /> ,  title: 'Home'}} component={Home} />
      <Stack.Screen name={NavigationKeys.SingleProfile} options={{title: 'Profile' }} component={PetProfileScreen} />
    </Stack.Navigator>
  )
}

export default MainStack


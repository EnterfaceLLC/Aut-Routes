import { View, Text, TouchableOpacity } from 'react-native'
import { Auth } from 'aws-amplify';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => Auth.signOut()}>
        <Text>
          Sign-Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;

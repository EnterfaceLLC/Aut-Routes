import 'react-native-gesture-handler';

import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import config from './src/aws-exports';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

Amplify.configure({ ...config, Analytics: { disabled: true } });

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const signUpConfig = {
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      displayOrder: 1,
      require: true,
      placeholder: 'Full Name'

    },
    {
      label: 'Email',
      key: 'username',
      displayOrder: 2,
      placeholder: 'Email'
    },
    {
      label: 'Verify Email',
      key: 'email',
      displayOrder: 3,
      placeholder: 'Verify Your Email'
    },
  ],
};

const enterfaceTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'teal',
    borderRadius: 25,
    marginTop: 25
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: 'tomato',
    borderRadius: 25
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    color: 'teal',
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: 'teal',
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: 'tomato'
  },
  input: {
    ...AmplifyTheme.input,
    borderRadius: 50
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App, { signUpConfig, theme: enterfaceTheme });

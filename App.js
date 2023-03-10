import 'react-native-gesture-handler';

import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import config from './src/aws-exports';

import { StatusBar } from 'expo-status-bar';
import StackNavigator from './src/navigations/StackNavigator';

Amplify.configure({ ...config, Analytics: { disabled: true } });

const App = () => {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
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
  // container: {
  //   ...AmplifyTheme.container,
  //   backgroundColor: 'slateblue',
  //   borderRadius: 25,
  //   marginTop: 25
  // },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'teal',
    borderRadius: 25,
    marginTop: 25
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: 'teal',
    borderRadius: 25
  },
  buttonText: {
    ...AmplifyTheme.buttonText,
    color: 'aquamarine',
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: 'hotpink',
  },
  sectionFooterLinkDisabled: {
    ...AmplifyTheme.sectionFooterLinkDisabled,
    color: 'hotpink'
  },
  input: {
    ...AmplifyTheme.input,
    borderRadius: 50
  }
};

export default withAuthenticator(App, { signUpConfig, theme: enterfaceTheme });

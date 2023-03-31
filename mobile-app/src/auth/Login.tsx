import React, { FC, ReactNode, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Linking, View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
import { Text, Button, useTheme } from 'react-native-paper';
import { Loader } from '../loaders/Loader';

const signIn = () => Auth.federatedSignIn();

export const Login: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const authStatus = useContext(AuthContext);

  if (authStatus.status === 'undefined') {
    return <Loader>Authenticating...</Loader>;
  }

  if (authStatus.status === 'logged-in') {
    return <>{children}</>;
  }

  const theme = useTheme();

  return (
    <View
      style={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text variant="bodyLarge" style={{ marginBottom: 15 }}>
        Sign in and enjoy the Vocably experience.
      </Text>
      <Button
        icon="google"
        mode="contained"
        onPress={signIn}
        style={{ marginBottom: 20 }}
      >
        Sign in with Google
      </Button>
      <Text style={{ marginHorizontal: 20, textAlign: 'center' }}>
        By signing in, you agree to our{' '}
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() =>
            Linking.openURL('https://vocably.pro/terms-and-conditions.html')
          }
        >
          Terms and Conditions
        </Text>{' '}
        and{' '}
        <Text
          style={{ color: theme.colors.primary }}
          onPress={() =>
            Linking.openURL('https://vocably.pro/privacy-policy.html')
          }
        >
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
};

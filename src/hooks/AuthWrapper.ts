import {useState, useEffect} from 'react';
import {useAuth0} from 'react-native-auth0';
import {useNetInfo} from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';

/**
 * Custom hook for handling authentication with Auth0.
 * @returns {{
 *   user: object | null, // The authenticated user object or null if not authenticated.
 *   error: string | null, // The error message if authentication fails, null otherwise.
 *   isConnected: boolean, // Indicates whether the device is currently connected to the internet.
 *   loading: boolean, // Indicates whether the authentication process is in progress.
 *   Login: (connectionName: 'facebook' | 'google' | 'apple') => Promise<void>, // Function to initiate authentication with the specified provider.
 *   isLoggedIn: boolean, // Indicates whether the user is currently logged in.
 *   Logout: () => Promise<void> // Function to log the user out.
 * }} Object containing authentication-related states and functions.
 */

export const useAuthWrapper = () => {
  const {
    authorize,
    clearSession,
    user,
    error,
    isLoading,
    getCredentials,
    hasValidCredentials,
    clearCredentials,
  } = useAuth0();
  const {isConnected} = useNetInfo();
  const [loadingState, setLoadingState] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(error?.message);

  /**
   * Displays a toast with the provided message.
   * @param {string} message - The message to display in the toast.
   */
  const showToast = (message: string) => {
    Toast.show(message, Toast.SHORT);
  };

  // Display toast and update authError state when authentication error occurs
  useEffect(() => {
    if (error) {
      showToast(error.message);
      setAuthError(error.message);
    }
  }, [error]);

  // Update isLoggedIn state when user changes
  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  /**
   * Handles authentication with Auth0.
   * @param connectionName The name of the authentication provider (e.g., 'facebook', 'google', 'apple').
   */
  const Login = async (connectionName: 'facebook' | 'google' | 'apple') => {
    if (!isConnected) {
      Toast.show('No internet connection', Toast.SHORT);
      return;
    }
    try {
      setLoadingState(true);
      if (connectionName === 'facebook') {
        await authorize({connection: 'facebook'});
      } else if (connectionName === 'google') {
        await authorize({connection: 'google-oauth2'});
      } else if (connectionName === 'apple') {
        await authorize({connection: 'apple'});
      }
      setLoadingState(false);
      setAuthError('');
    } catch (e) {
      console.log(e);
      setAuthError((e as Error)?.message);
      setLoadingState(false);
    }
  };

  /**
   * Handles user logout.
   */
  const Logout = async () => {
    try {
      setLoadingState(true);
      await clearCredentials();
      await clearSession();
      setLoadingState(false);
    } catch (e) {
      setAuthError((e as Error)?.message);
      setLoadingState(false);
      console.log(e);
    }
  };

  return {
    user,
    error: authError,
    isConnected,
    loading: loadingState || isLoading,
    Login,
    isLoggedIn,
    hasValidCredentials,
    getCredentials,
    Logout,
  };
};

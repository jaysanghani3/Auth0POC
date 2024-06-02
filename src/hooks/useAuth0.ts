// useAuth0.ts
import Auth from 'react-native-auth0';
// import {useNetInfo} from '@react-native-community/netinfo';

// Import types from authTypes.ts

import {PasswordRealmOptions, CreateUserOptions} from 'react-native-auth0';

/**
 * A custom hook for Auth0 authentication.
 */
// const useAuth0 = () => {
// const {isConnected} = useNetInfo();

const auth0 = new Auth({
  domain: 'jaysanghani.us.auth0.com',
  clientId: 'bRontVsfXwGlGOFmDqYcz8bqGDma0iyn',
});
const myConnection = 'Username-Password-Authentication';

// const [auth0, setAuth0] = useState<Auth | null>(null);
// const [authState, setAuthState] = useState<AuthState>({
//   isLoading: true,
//   isAuthenticated: false,
//   user: null,
//   error: null,
// });

// const checkInternetConnection = () => {
//   if (!isConnected) {
//     setAuthState({
//       ...authState,
//       error: new Error('No internet connection'),
//     });
//     return;
//   }
// };

// useEffect(() => {
//   const initializeAuth0 = async () => {
//     try {
//       const auth0Instance = new Auth({
//         domain: 'YOUR_AUTH0_DOMAIN',
//         clientId: 'YOUR_AUTH0_CLIENT_ID',
//       });
//       // setAuth0(auth0Instance);

//       // Check if the user is already authenticated
//       const isAuthenticated = await auth0Instance.webAuth.checkSession();
//       if (isAuthenticated) {
//         const userProfile = await auth0Instance.webAuth.auth.userInfo();
//         setAuthState({
//           isLoading: false,
//           isAuthenticated: true,
//           user: userProfile,
//           error: null,
//         });
//       } else {
//         setAuthState({
//           isLoading: false,
//           isAuthenticated: false,
//           user: null,
//           error: null,
//         });
//       }
//     } catch (error) {
//       setAuthState({
//         isLoading: false,
//         isAuthenticated: false,
//         user: null,
//         error: error as Error,
//       });
//     }
//   };

//   initializeAuth0();

//   // Cleanup function
//   return () => {
//     if (auth0) {
//       auth0.offAuthStateChanged();
//     }
//   };
// }, []);

/**
 * Logs in the user with email and password.
 * @param {PasswordRealmOptions} details - Details for email/password login.
 */
export const loginWithEmailPassword = async (details: PasswordRealmOptions) => {
  try {
    const {username, password} = details;

    const responce = await auth0?.auth.passwordRealm({
      username,
      password,
      realm: myConnection,
    });
    // if (responce.accessToken) {
    //   await auth0?.auth.userInfo({token: responce.accessToken});
    // }
    return responce.accessToken;
    // setAuthState({
    //   ...authState,
    //   isAuthenticated: true,
    //   user: userProfile,
    //   error: null,
    // });
  } catch (error) {
    // setAuthState({
    //   ...authState,
    //   isAuthenticated: false,
    //   user: null,
    //   error: error as Error,
    // });
    console.log(error);
  }
};

export const LoginwithSocial = async (
  connection: 'facebook' | 'google-oauth2' | 'apple',
) => {
  try {
    let responce;
    responce = await auth0.webAuth.authorize({connection});
    responce = await auth0.webAuth.authorize({connection});
    responce = await auth0.webAuth.authorize({connection});
    return responce.accessToken;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Signs up the user with email and password.
 * @param {CreateUserOptions} details - details for email/password signup.
 */
export const signupWithEmailPassword = async (details: CreateUserOptions) => {
  try {
    const {email, username, password} = details;
    const responce = await auth0.auth.createUser({
      email,
      username,
      password,
      connection: myConnection,
    });
    return responce.sub;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Logs out the current user.
 */
export const logout = async () => {
  await auth0?.webAuth.clearSession();
  // setAuthState({
  //   ...authState,
  //   isAuthenticated: false,
  //   user: null,
  //   error: null,
  // });
};

/**
 * Resets the user's password.
 * @param {ResetPasswordOptions} email - Email for resetting the password.
 */
export const forgotPassword = async (email: string) => {
  try {
    await auth0.auth.resetPassword({
      email,
      connection: myConnection,
    });
  } catch (error) {
    console.log(error);
  }
};

//   return {
//     loginWithEmailPassword,
//     signupWithEmailPassword,
//     logout,
//     forgotPassword,
//   };
// };

// export default useAuth0;

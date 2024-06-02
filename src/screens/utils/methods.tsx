import Auth from 'react-native-auth0';

// Initialize Auth0 with provided domain and client ID
const auth0 = new Auth({
  domain: 'jaysanghani.us.auth0.com',
  clientId: 'bRontVsfXwGlGOFmDqYcz8bqGDma0iyn',
});

// Specify the connection name for email/password authentication
const myConnection = 'Username-Password-Authentication';

interface PasswordRealmOptions {
  username: string;
  password: string;
}
/**
 * Logs in the user with email and password.
 * @param {PasswordRealmOptions} details - Details for email/password login.
 * @returns {Promise<string>} - Access token upon successful login.
 */
export const loginWithEmailPassword = async (details: PasswordRealmOptions) => {
  try {
    const responce = await auth0?.auth.passwordRealm({
      ...details,
      realm: myConnection,
    });
    return responce.accessToken;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Logs in the user using social authentication (Facebook, Google, or Apple).
 * @param {'facebook' | 'google-oauth2' | 'apple'} connection - The social media connection to use.
 * @returns {Promise<string>} - Access token upon successful login.
 */
export const loginwithSocial = async (
  connection: 'facebook' | 'google-oauth2' | 'apple',
) => {
  try {
    return await auth0.webAuth.authorize({connection});
  } catch (e) {
    console.log(e);
  }
};

/**
 * Retrieves the user's information using the provided access token.
 * @param {string} token - Access token for the user.
 * @returns {Promise<any>} - User information.
 */
export const getUserInfo = async (token: string) => {
  try {
    return await auth0.auth.userInfo({token});
  } catch (e) {
    console.log(e);
  }
};
interface CreateUserOptions {
  email: string;
  username: string;
  password: string;
}
/**
 * Signs up the user with email and password.
 * @param {CreateUserOptions} details - Details for email/password signup.
 * @returns {Promise<string>} - Unique identifier for the created user.
 */
export const signupWithEmailPassword = async (details: CreateUserOptions) => {
  try {
    return await auth0.auth.createUser({
      ...details,
      connection: myConnection,
    });
  } catch (e) {
    console.log(e);
  }
};

/**
 * Logs out the current user by clearing the session.
 */
export const logout = async () => {
  await auth0?.webAuth.clearSession();
  await auth0.credentialsManager.clearCredentials();
};

/**
 * Initiates the process to reset the user's password.
 * @param {string} email - Email address for resetting the password.
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

import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {useAuthWrapper} from '../../hooks/AuthWrapper';
import styles from '../../screens/LoginScreen/styles';
import Loader from '../../components/Loader';
import {getUserInfo} from '../utils/methods';
const WelcomeScreen = ({navigation, route}: any) => {
  const {loading, Logout} = useAuthWrapper();
  const {token} = route.params;
  const [userDetails, setUserDetails] = React.useState<any>();

  React.useEffect(() => {
    fetchUserDetails();
  }, [token]);

  const fetchUserDetails = async () => {
    try {
      const res = await getUserInfo(token);
      console.log(res);
      setUserDetails(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      await Logout();
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    token && (
      <View style={styles.container}>
        <Loader state={loading} />
        <Image source={{uri: userDetails.picture}} style={styles.profilePic} />
        <Text>Welcome {userDetails?.email}</Text>
        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.whiteBtnText}>Logout</Text>
        </Pressable>
      </View>
    )
  );
};

export default WelcomeScreen;

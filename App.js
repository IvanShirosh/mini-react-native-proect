import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function App() {
  const user = {
    name: 'Ivan',
    email: 'ivan.w@nsbm.ac.lk',
    points: 0,
    // Replace with require('./assets/avatar.png') to use a local image
     avatar: require('./assets/ppgg.jpg'),
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Body */}
      <View style={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image source={user.avatar } style={styles.avatar} />
            <View style={styles.badge}>
              <FontAwesome name="check" size={30} color="#00e000" />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <MaterialIcons name="email" size={20} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.email}</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <FontAwesome name="star" size={20} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.points}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f3f4',
    paddingHorizontal: 16,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  avatarCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  badge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  divider: {
    height: 2,
    backgroundColor: '#222',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#000',
  },
  value: {
    fontSize: 16,
    color: '#222',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rowText: {
    marginTop: 0,
    marginLeft: 8,
  },
});
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Messages() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages screen</Text>
      <Link push href="/">Navigate to index</Link>
    </View>
  );
}

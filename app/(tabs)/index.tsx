import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Root() {
  const [count, setCount] = useState(0);
  
  return (
    <React.Fragment>
    <Stack.Screen
        options={{
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
    <View style={styles.container}>
      <Link push href="/about" asChild>
        <Text>Home</Text>
      </Link>
      <Link href={{ pathname: '/details', params: { name: 'Bacon' } }}>Go to Details</Link>
      <Text>Count: {count}</Text>
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});

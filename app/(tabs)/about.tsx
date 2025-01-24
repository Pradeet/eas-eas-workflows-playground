import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function About () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.description}>
                Welcome to our app! We are dedicated to providing the best service possible.
            </Text>
            <Link push href="/" asChild>
                <Text>Go back home</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

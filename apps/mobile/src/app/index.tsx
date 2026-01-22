import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/theme/colors';
import { ThemedText } from '@/components/ui/Typography';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        // Simulate loading/check
        const timer = setTimeout(() => {
            // Logic to check if user is onboarded/logged in would be here
            router.replace('/onboarding');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText variant="h1" color={colors.primary} style={{ letterSpacing: 2 }}>ETHCO AI</ThemedText>
            <ActivityIndicator color={colors.primary} size="large" style={{ marginTop: 24 }} />
        </View>
    );
}

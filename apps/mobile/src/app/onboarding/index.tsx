import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { colors } from '@/theme/colors';

export default function OnboardingScreen() {
    const router = useRouter();

    return (
        <Screen style={styles.container}>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <ThemedText variant="h1" centered style={styles.title}>
                        Intelligence,{'\n'}
                        <ThemedText variant="h1" color={colors.primary}>Refined.</ThemedText>
                    </ThemedText>
                    <ThemedText variant="body" centered color={colors.textSecondary} style={styles.subtitle}>
                        Secure, proprietary AI models designed to work for you privately.
                    </ThemedText>
                </View>

                {/* Placeholder for illustration */}
                <View style={styles.illustrationPlaceholder} />
            </View>

            <View style={styles.footer}>
                <Button title="Get Started" onPress={() => router.push('/auth/login')} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    title: {
        marginBottom: 16,
    },
    subtitle: {
        maxWidth: 280,
    },
    illustrationPlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: colors.surface,
        borderRadius: 100,
        opacity: 0.5,
    },
    footer: {
        paddingVertical: 20,
        gap: 12,
    },
});

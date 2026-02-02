import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        // Mock login delay
        setTimeout(() => {
            setLoading(false);
            // Navigate to Chat App (using 'replace' to prevent going back to login)
            router.replace('/conversations');
        }, 1500);
    };

    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <ThemedText variant="h2" weight="bold">Welcome Back</ThemedText>
                <ThemedText variant="body" color={colors.textSecondary} style={{ marginTop: spacing.sm }}>
                    Sign in to access your models.
                </ThemedText>
            </View>

            <View style={styles.form}>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Button
                    onPress={handleLogin}
                    loading={loading}
                    style={styles.button}
                >
                    Sign In
                </Button>

                <View style={styles.footerLink}>
                    <ThemedText variant="body" color={colors.textSecondary}>Don't have an account? </ThemedText>
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <ThemedText variant="body" color={colors.primary} weight="bold">Sign Up</ThemedText>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    header: {
        marginBottom: spacing.xl * 2,
    },
    form: {
        gap: spacing.md,
    },
    button: {
        marginTop: spacing.sm,
    },
    footerLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing.xl,
    },
});

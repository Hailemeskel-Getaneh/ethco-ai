import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { colors } from '@/theme/colors';

export default function SignupScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = () => {
        setLoading(true);
        // Mock login delay
        setTimeout(() => {
            setLoading(false);
            router.replace('/(app)');
        }, 1500);
    };

    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <ThemedText variant="h2" weight="bold">Create Account</ThemedText>
                <ThemedText variant="body" color={colors.textSecondary} style={{ marginTop: 8 }}>
                    Join the private intelligence network.
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
                    placeholder="Create a password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Button
                    title="Create Account"
                    onPress={handleSignup}
                    loading={loading}
                    style={styles.button}
                />

                <View style={styles.footerLink}>
                    <ThemedText variant="body" color={colors.textSecondary}>Already have an account? </ThemedText>
                    <TouchableOpacity onPress={() => router.back()}>
                        <ThemedText variant="body" color={colors.primary} weight="bold">Sign In</ThemedText>
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
        marginBottom: 40,
    },
    form: {
        gap: 16,
    },
    button: {
        marginTop: 8,
    },
    footerLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
    },
});

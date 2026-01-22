import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { colors } from '@/theme/colors';

function SettingItem({ title, value, onPress }: { title: string; value?: string; onPress?: () => void }) {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <ThemedText variant="body">{title}</ThemedText>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {value && <ThemedText variant="body" color={colors.textSecondary} style={{ marginRight: 8 }}>{value}</ThemedText>}
                <ThemedText variant="body" color={colors.textSecondary}>{'>'}</ThemedText>
            </View>
        </TouchableOpacity>
    );
}

export default function SettingsScreen() {
    const router = useRouter();

    const handleLogout = () => {
        // Clear tokens logic here
        router.replace('/auth/login');
    };

    return (
        <Screen style={styles.container}>
            <ScrollView>
                <View style={styles.section}>
                    <ThemedText variant="h3" style={styles.sectionTitle}>General</ThemedText>
                    <SettingItem title="Appearance" value="Dark" />
                    <SettingItem title="Language" value="English" />
                </View>

                <View style={styles.section}>
                    <ThemedText variant="h3" style={styles.sectionTitle}>AI Models</ThemedText>
                    <SettingItem title="Default Model" value="Ethco v1" />
                    <SettingItem title="Reasoning Depth" value="Standard" />
                </View>

                <View style={styles.section}>
                    <ThemedText variant="h3" style={styles.sectionTitle}>Account</ThemedText>
                    <SettingItem title="Email" value="user@example.com" />
                    <SettingItem title="Subscription" value="Pro" />
                </View>

                <Button
                    title="Sign Out"
                    variant="outline"
                    onPress={handleLogout}
                    style={styles.logoutButton}
                />

                <View style={styles.version}>
                    <ThemedText variant="caption" color={colors.textSecondary}>Ethco AI v1.0.0 (Beta)</ThemedText>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        marginBottom: 16,
        color: colors.primary,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    logoutButton: {
        marginTop: 20,
        borderColor: colors.error,
    },
    version: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    }
});

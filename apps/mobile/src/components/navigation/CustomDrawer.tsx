import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { Icon } from '@/components/ui/Icons';
import { ThemedText } from '@/components/ui';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { mockConversations, mockUser } from '@/services/mockAI';

export function CustomDrawerContent(props: DrawerContentComponentProps) {
    const router = useRouter();

    const handleNewChat = () => {
        const newId = Date.now().toString();
        props.navigation.closeDrawer();
        router.push(`/chat/${newId}`);
    };

    const handleChatPress = (id: string) => {
        props.navigation.closeDrawer();
        router.push(`/chat/${id}`);
    };

    const handleSettings = () => {
        props.navigation.closeDrawer();
        router.push('/settings');
    };

    return (
        <View style={styles.container}>
            {/* Header with User Profile */}
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Icon name="person-circle" size={48} color={colors.primary} />
                </View>
                <ThemedText variant="body" weight="bold" style={styles.userName}>
                    {mockUser.name}
                </ThemedText>
                <ThemedText variant="caption" color={colors.textSecondary}>
                    {mockUser.email}
                </ThemedText>
            </View>

            {/* New Chat Button */}
            <TouchableOpacity style={styles.newChatButton} onPress={handleNewChat}>
                <Icon name="add-circle-outline" size={24} color={colors.primary} />
                <ThemedText variant="body" weight="medium" style={styles.newChatText}>
                    New Chat
                </ThemedText>
            </TouchableOpacity>

            {/* Chat History */}
            <ScrollView style={styles.historyContainer} showsVerticalScrollIndicator={false}>
                <ThemedText variant="caption" color={colors.textSecondary} style={styles.sectionTitle}>
                    RECENT CHATS
                </ThemedText>
                {mockConversations.map((conversation) => (
                    <TouchableOpacity
                        key={conversation.id}
                        style={styles.chatItem}
                        onPress={() => handleChatPress(conversation.id)}
                    >
                        <Icon name="chatbubble-outline" size={20} color={colors.textSecondary} />
                        <View style={styles.chatItemContent}>
                            <ThemedText variant="body" numberOfLines={1} style={styles.chatTitle}>
                                {conversation.title}
                            </ThemedText>
                            <ThemedText variant="caption" color={colors.textSecondary} numberOfLines={1}>
                                {conversation.lastMessage}
                            </ThemedText>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Footer with Settings */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
                    <Icon name="settings-outline" size={24} color={colors.textSecondary} />
                    <ThemedText variant="body" color={colors.textSecondary} style={styles.settingsText}>
                        Settings
                    </ThemedText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.surface,
    },
    header: {
        padding: spacing.lg,
        paddingTop: spacing.xl,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
    },
    avatarContainer: {
        marginBottom: spacing.sm,
    },
    userName: {
        marginBottom: spacing.xs,
    },
    newChatButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
        marginHorizontal: spacing.md,
        marginTop: spacing.md,
        backgroundColor: colors.surfaceHighlight,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    newChatText: {
        marginLeft: spacing.sm,
        color: colors.primary,
    },
    historyContainer: {
        flex: 1,
        marginTop: spacing.md,
    },
    sectionTitle: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        fontWeight: '600',
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.md,
        paddingHorizontal: spacing.lg,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    chatItemContent: {
        flex: 1,
        marginLeft: spacing.sm,
    },
    chatTitle: {
        marginBottom: spacing.xs / 2,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        padding: spacing.md,
    },
    settingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing.sm,
    },
    settingsText: {
        marginLeft: spacing.sm,
    },
});

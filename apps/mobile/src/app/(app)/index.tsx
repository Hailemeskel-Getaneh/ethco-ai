import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui/Typography';
import { colors } from '@/theme/colors';
import { mockConversations, Conversation } from '@/services/mockAI';

// Helper component for list items
function ConversationItem({ item, onPress }: { item: Conversation; onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress} activeOpacity={0.7}>
            <View style={styles.avatarPlaceholder} />
            <View style={styles.textContainer}>
                <View style={styles.topRow}>
                    <ThemedText variant="body" weight="bold" numberOfLines={1} style={styles.title}>
                        {item.title}
                    </ThemedText>
                    <ThemedText variant="caption" color={colors.textSecondary}>
                        {item.date}
                    </ThemedText>
                </View>
                <ThemedText variant="caption" color={colors.textSecondary} numberOfLines={2}>
                    {item.lastMessage}
                </ThemedText>
            </View>
        </TouchableOpacity>
    );
}

export default function ConversationListScreen() {
    const router = useRouter();
    const [conversations] = useState(mockConversations);

    const handlePress = (id: string) => {
        router.push(`/(app)/chat/${id}`);
    };

    const handleNewChat = () => {
        const newId = Date.now().toString();
        router.push(`/(app)/chat/${newId}`);
    };

    return (
        <Screen style={styles.container} safeArea={false}>
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ConversationItem item={item} onPress={() => handlePress(item.id)} />
                )}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyState}>
                        <ThemedText color={colors.textSecondary}>No conversations yet.</ThemedText>
                    </View>
                }
            />

            <TouchableOpacity style={styles.fab} onPress={handleNewChat}>
                <ThemedText variant="h2" color="#FFF">+</ThemedText>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
    },
    listContent: {
        paddingVertical: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
    },
    avatarPlaceholder: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.surfaceHighlight,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    title: {
        flex: 1,
        marginRight: 8,
    },
    emptyState: {
        padding: 40,
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    }
});

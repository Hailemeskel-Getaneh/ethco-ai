import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '../ui/Avatar';
import { ThemedText } from '../ui/ThemedText';
import { colors } from '@/theme/colors';

interface ConversationRowProps {
    id: string;
    name: string;
    lastMessage?: string;
    time?: string;
    avatar?: string;
    unreadCount?: number;
    onPress: (id: string) => void;
}

export const ConversationRow = ({
    id,
    name,
    lastMessage,
    time,
    avatar,
    unreadCount,
    onPress,
}: ConversationRowProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(id)}
            activeOpacity={0.7}
        >
            <Avatar source={avatar} initials={name} size={50} online={unreadCount ? true : false} />

            <View style={styles.content}>
                <View style={styles.header}>
                    <ThemedText variant="defaultSemiBold" style={styles.name} numberOfLines={1}>
                        {name}
                    </ThemedText>
                    {time && (
                        <ThemedText variant="caption" style={styles.time}>
                            {time}
                        </ThemedText>
                    )}
                </View>

                <View style={styles.footer}>
                    <ThemedText
                        style={[
                            styles.message,
                            unreadCount ? styles.unreadMessage : null
                        ]}
                        numberOfLines={1}
                    >
                        {lastMessage || 'No messages yet'}
                    </ThemedText>

                    {unreadCount ? (
                        <View style={styles.badge}>
                            <ThemedText style={styles.badgeText}>
                                {unreadCount > 9 ? '9+' : unreadCount}
                            </ThemedText>
                        </View>
                    ) : null}
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: colors.background,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    content: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 4,
    },
    name: {
        flex: 1,
        marginRight: 8,
        color: colors.text,
    },
    time: {
        color: colors.textSecondary,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    message: {
        flex: 1,
        color: colors.textSecondary,
        fontSize: 14,
        marginRight: 8,
    },
    unreadMessage: {
        color: colors.text,
        fontWeight: '600',
    },
    badge: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        color: colors.textInverse,
        fontSize: 10,
        fontWeight: 'bold',
    },
});

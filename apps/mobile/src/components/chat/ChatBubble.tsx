import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ui';
import { colors } from '@/theme/colors';
import { Message } from '@/services/mockAI';

interface ChatBubbleProps {
    message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
    const isUser = message.role === 'user';

    return (
        <View style={[
            styles.container,
            isUser ? styles.userContainer : styles.assistantContainer
        ]}>
            <View style={[
                styles.bubble,
                isUser ? styles.userBubble : styles.assistantBubble
            ]}>
                <ThemedText
                    variant="body"
                    color={isUser ? '#FFFFFF' : colors.text} // User text is always white on primary
                >
                    {message.content}
                </ThemedText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
        flexDirection: 'row',
    },
    userContainer: {
        justifyContent: 'flex-end',
    },
    assistantContainer: {
        justifyContent: 'flex-start',
    },
    bubble: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 16,
    },
    userBubble: {
        backgroundColor: colors.primary,
        borderBottomRightRadius: 4,
    },
    assistantBubble: {
        backgroundColor: colors.surfaceHighlight,
        borderBottomLeftRadius: 4,
    },
});

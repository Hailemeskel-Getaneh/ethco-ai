import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '../ui/ThemedText';
import { colors } from '@/theme/colors';

interface MessageBubbleProps {
    role: 'user' | 'assistant';
    content: string;
}

export const MessageBubble = ({ role, content }: MessageBubbleProps) => {
    const isUser = role === 'user';

    return (
        <View
            style={[
                styles.container,
                isUser ? styles.userContainer : styles.assistantContainer
            ]}
        >
            <View
                style={[
                    styles.bubble,
                    isUser ? styles.userBubble : styles.assistantBubble
                ]}
            >
                <ThemedText
                    style={{
                        color: isUser ? colors.textInverse : colors.text
                    }}
                >
                    {content}
                </ThemedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        paddingHorizontal: 16,
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
        backgroundColor: colors.chatUserBackground || colors.primary,
        borderBottomRightRadius: 4,
    },
    assistantBubble: {
        backgroundColor: colors.chatAssistantBackground || colors.surfaceHighlight,
        borderBottomLeftRadius: 4,
    },
});

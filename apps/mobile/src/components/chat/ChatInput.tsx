import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { Icon } from '../ui/Icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ChatInputProps {
    onSend: (message: string) => void;
    isLoading?: boolean;
}

export const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
    const [text, setText] = useState('');
    const insets = useSafeAreaInsets();

    const handleSend = () => {
        if (text.trim()) {
            onSend(text.trim());
            setText('');
        }
    };

    return (
        <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 20) }]}>
            <TouchableOpacity style={styles.attachButton}>
                <Icon name="add" size={24} color={colors.primary} />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message Ethco AI..."
                    placeholderTextColor={colors.textMuted}
                    value={text}
                    onChangeText={setText}
                    multiline
                    maxLength={1000}
                />
            </View>

            <TouchableOpacity
                style={[styles.sendButton, !text.trim() && styles.disabledSend]}
                onPress={handleSend}
                disabled={!text.trim() || isLoading}
            >
                <Icon
                    name="send"
                    size={20}
                    color={text.trim() ? colors.textInverse : colors.textMuted}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingTop: 12,
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    attachButton: {
        padding: 10,
        marginBottom: 6,
    },
    inputContainer: {
        flex: 1,
        minHeight: 44,
        maxHeight: 120,
        backgroundColor: colors.inputBackground, // Ensure this exists in colors or fallback
        borderRadius: 22,
        marginHorizontal: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
    },
    input: {
        color: colors.text,
        fontSize: typography.sizes.md,
        paddingTop: 0,
        // Android multiline input alignment fix
        textAlignVertical: 'center',
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    disabledSend: {
        backgroundColor: colors.surfaceHighlight,
    },
});

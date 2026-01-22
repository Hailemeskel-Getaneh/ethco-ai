import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { ThemedText } from '@/components/ui/Typography';

// Note: In a real app we would use an Icon library like Ionicons
// For now we use text symbols or simple views

interface ChatInputProps {
    onSend: (text: string) => void;
    disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim() && !disabled) {
            onSend(text.trim());
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Message..."
                placeholderTextColor={colors.textSecondary}
                multiline
                maxLength={500}
                editable={!disabled}
            />
            <TouchableOpacity
                style={[styles.sendButton, (!text.trim() || disabled) && styles.disabledButton]}
                onPress={handleSend}
                disabled={!text.trim() || disabled}
            >
                {disabled ? (
                    <ActivityIndicator size="small" color={colors.background} />
                ) : (
                    <View style={{ width: 20, height: 20, backgroundColor: colors.text, borderRadius: 10 }} />
                    // Placeholder for Send Icon (Arrow Up)
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 12,
        backgroundColor: colors.surface,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    input: {
        flex: 1,
        minHeight: 40,
        maxHeight: 100,
        backgroundColor: colors.background,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
        color: colors.text,
        fontSize: typography.sizes.md,
        marginRight: 10,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: colors.surfaceHighlight,
        opacity: 0.5,
    },
});

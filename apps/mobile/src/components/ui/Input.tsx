import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';
import { ThemedText } from './Typography';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export function Input({ label, error, style, ...rest }: InputProps) {
    return (
        <View style={styles.container}>
            {label && (
                <ThemedText variant="label" color={colors.textSecondary} style={styles.label}>
                    {label}
                </ThemedText>
            )}
            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null,
                    style,
                ]}
                placeholderTextColor={colors.textSecondary}
                selectionColor={colors.primary}
                {...rest}
            />
            {error && (
                <ThemedText variant="caption" color={colors.error} style={styles.error}>
                    {error}
                </ThemedText>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
    },
    input: {
        height: 50,
        backgroundColor: colors.surface,
        borderRadius: 8,
        paddingHorizontal: 16,
        color: colors.text,
        fontSize: typography.sizes.md,
        borderWidth: 1,
        borderColor: colors.border,
    },
    inputError: {
        borderColor: colors.error,
    },
    error: {
        marginTop: 4,
    },
});

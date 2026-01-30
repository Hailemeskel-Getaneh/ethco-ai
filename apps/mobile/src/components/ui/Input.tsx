import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, StyleProp } from 'react-native';
import { ThemedText } from './ThemedText';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    helperText?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

/**
 * Input component for user text entry.
 * 
 * @param {InputProps} props - The props for the component.
 * @param {string} [props.label] - Optional label to display above the input.
 * @param {string} [props.error] - Error message to display below the input.
 * @param {string} [props.helperText] - Helper text to display below the input.
 * @param {StyleProp<ViewStyle>} [props.containerStyle] - Style for the container view.
 */
export const Input = ({
    label,
    error,
    helperText,
    containerStyle,
    style,
    ...props
}: InputProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {label && (
                <ThemedText variant="caption" style={styles.label}>
                    {label}
                </ThemedText>
            )}

            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null,
                    style,
                ]}
                placeholderTextColor={colors.textMuted}
                selectionColor={colors.primary}
                {...props}
            />

            {error ? (
                <ThemedText style={styles.errorText}>{error}</ThemedText>
            ) : helperText ? (
                <ThemedText style={styles.helperText}>{helperText}</ThemedText>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: colors.textSecondary,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontSize: typography.sizes.xs,
    },
    input: {
        backgroundColor: colors.inputBackground || colors.surface,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        color: colors.text,
        fontSize: typography.sizes.md,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    inputError: {
        borderColor: colors.error,
        backgroundColor: colors.errorBackground,
        borderWidth: 1,
    },
    errorText: {
        color: colors.error,
        fontSize: typography.sizes.xs,
        marginTop: 4,
    },
    helperText: {
        color: colors.textSecondary,
        fontSize: typography.sizes.xs,
        marginTop: 4,
    },
});

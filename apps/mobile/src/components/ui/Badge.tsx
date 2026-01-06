import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, borderRadius, spacing } from '@/theme';
import { ThemedText } from './ThemedText';

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'success' | 'error' | 'outline';
    size?: 'sm' | 'md';
    style?: StyleProp<ViewStyle>;
}

/**
 * A small status indicator component.
 * 
 * @param {BadgeProps} props - The props for the component.
 */
export const Badge = ({
    label,
    variant = 'primary',
    size = 'sm',
    style,
}: BadgeProps) => {
    return (
        <View
            style={[
                styles.badge,
                styles[variant],
                styles[size],
                style,
            ]}
        >
            <ThemedText
                variant="caption"
                weight="bold"
                style={[
                    styles.text,
                    variant === 'outline' ? { color: colors.primary } : { color: colors.textInverse },
                ]}
            >
                {label.toUpperCase()}
            </ThemedText>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'flex-start',
        borderRadius: borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 10,
    },
    sm: {
        paddingHorizontal: spacing.xs,
        paddingVertical: 2,
    },
    md: {
        paddingHorizontal: spacing.sm,
        paddingVertical: 4,
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.surfaceHighlight,
    },
    success: {
        backgroundColor: '#10B981',
    },
    error: {
        backgroundColor: '#EF4444',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary,
    },
});

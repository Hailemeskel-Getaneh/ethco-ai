import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, borderRadius, spacing, shadows } from '@/theme';

interface CardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    variant?: 'flat' | 'elevated' | 'outline';
    padding?: keyof typeof spacing;
}

/**
 * A container component for grouping related content.
 * 
 * @param {CardProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {'flat' | 'elevated' | 'outline'} [props.variant='elevated'] - The visual style of the card.
 * @param {keyof typeof spacing} [props.padding='md'] - Internal padding.
 */
export const Card = ({
    children,
    style,
    variant = 'elevated',
    padding = 'md',
}: CardProps) => {
    return (
        <View
            style={[
                styles.card,
                styles[variant],
                { padding: spacing[padding] },
                style,
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: borderRadius.md,
        backgroundColor: colors.surface,
    },
    flat: {
        backgroundColor: colors.surface,
    },
    elevated: {
        ...shadows.md,
    },
    outline: {
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: 'transparent',
    },
});

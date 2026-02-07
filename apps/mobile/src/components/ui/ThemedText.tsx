import { StyleSheet, Text, type TextProps } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export type ThemedTextProps = TextProps & {
    variant?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
    color?: string;
    fontSize?: number;
};

/**
 * ThemedText component that renders text with theme-aware styles.
 * 
 * @param {ThemedTextProps} props - The props for the component.
 * @param {string} [props.variant='default'] - The typography variant to use.
 * @param {string} [props.color] - Optional color override.
 * @param {number} [props.fontSize] - Optional font size override.
 */
export function ThemedText({
    style,
    variant = 'default',
    color,
    fontSize,
    ...rest
}: ThemedTextProps) {
    return (
        <Text
            style={[
                styles.default,
                variant === 'title' && styles.title,
                variant === 'defaultSemiBold' && styles.defaultSemiBold,
                variant === 'subtitle' && styles.subtitle,
                variant === 'link' && styles.link,
                variant === 'caption' && styles.caption,
                variant === 'label' && styles.label,
                variant === 'h1' && styles.h1,
                variant === 'h2' && styles.h2,
                variant === 'h3' && styles.h3,
                variant === 'h4' && styles.h4,
                variant === 'h5' && styles.h5,
                color ? { color } : undefined,
                fontSize ? { fontSize } : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: typography.sizes.md,
        lineHeight: typography.lineHeights.md,
        fontFamily: typography.fontFamily.regular,
        color: colors.text,
    },
    defaultSemiBold: {
        fontSize: typography.sizes.md,
        lineHeight: typography.lineHeights.md,
        fontFamily: typography.fontFamily.medium,
        fontWeight: typography.weights.semibold as any,
        color: colors.text,
    },
    title: {
        fontSize: typography.sizes.xxl,
        fontWeight: typography.weights.bold as any,
        lineHeight: typography.lineHeights.xxl,
        fontFamily: typography.fontFamily.bold,
        color: colors.text,
    },
    subtitle: {
        fontSize: typography.sizes.lg,
        fontWeight: typography.weights.bold as any,
        fontFamily: typography.fontFamily.bold,
        color: colors.text,
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: colors.primary,
    },
    caption: {
        fontSize: typography.sizes.xs,
        color: colors.textSecondary,
        lineHeight: typography.lineHeights.xs,
    },
    label: {
        fontSize: typography.sizes.sm,
        fontWeight: typography.weights.bold as any,
        fontFamily: typography.fontFamily.bold,
        color: colors.text,
    },
    h1: {
        fontSize: typography.sizes.xxxl,
        lineHeight: typography.lineHeights.xxxl,
        fontFamily: typography.fontFamily.bold,
        fontWeight: typography.weights.bold as any,
    },
    h2: {
        fontSize: typography.sizes.xxl,
        lineHeight: typography.lineHeights.xxl,
        fontFamily: typography.fontFamily.bold,
        fontWeight: typography.weights.bold as any,
    },
    h3: {
        fontSize: typography.sizes.xl,
        lineHeight: typography.lineHeights.xl,
        fontFamily: typography.fontFamily.bold,
        fontWeight: typography.weights.bold as any,
    },
    h4: {
        fontSize: typography.sizes.lg,
        lineHeight: typography.lineHeights.lg,
        fontFamily: typography.fontFamily.bold,
        fontWeight: typography.weights.bold as any,
    },
    h5: {
        fontSize: typography.sizes.md,
        lineHeight: typography.lineHeights.md,
        fontFamily: typography.fontFamily.bold,
        fontWeight: typography.weights.bold as any,
    },
});

import { Text, type TextProps, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export type ThemedTextProps = TextProps & {
    variant?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'caption';
    color?: string;
    fontSize?: number;
};

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
                color && { color },
                fontSize && { fontSize },
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
});

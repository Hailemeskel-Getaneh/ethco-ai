import React from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, spacing, typography } from '@/theme';
import { ThemedText } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';

interface ListItemProps {
    title: string;
    subtitle?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    titleColor?: string;
    destructive?: boolean;
}

/**
 * A standard list item component with optional icons and press support.
 */
export const ListItem = ({
    title,
    subtitle,
    leftIcon,
    rightIcon = 'chevron-forward',
    onPress,
    style,
    titleColor,
    destructive,
}: ListItemProps) => {
    const Content = (
        <View style={[styles.container, style]}>
            {leftIcon && (
                <View style={styles.leftIcon}>
                    <Ionicons
                        name={leftIcon}
                        size={22}
                        color={destructive ? colors.error : colors.textSecondary}
                    />
                </View>
            )}

            <View style={styles.textContainer}>
                <ThemedText
                    variant="defaultSemiBold"
                    color={destructive ? colors.error : (titleColor || colors.text)}
                >
                    {title}
                </ThemedText>
                {subtitle && (
                    <ThemedText variant="caption" style={styles.subtitle}>
                        {subtitle}
                    </ThemedText>
                )}
            </View>

            {rightIcon && !onPress && (
                <Ionicons name={rightIcon} size={20} color={colors.textMuted} />
            )}
            {onPress && (
                <Ionicons name={rightIcon} size={20} color={colors.textMuted} />
            )}
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                {Content}
            </TouchableOpacity>
        );
    }

    return Content;
};

interface ListSectionProps {
    title?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const ListSection = ({ title, children, style }: ListSectionProps) => {
    return (
        <View style={[styles.section, style]}>
            {title && (
                <ThemedText variant="caption" style={styles.sectionTitle}>
                    {title.toUpperCase()}
                </ThemedText>
            )}
            <View style={styles.sectionContent}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: colors.surface,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    leftIcon: {
        marginRight: 16,
        width: 24,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    subtitle: {
        marginTop: 2,
        color: colors.textSecondary,
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        marginLeft: 16,
        marginBottom: 8,
        letterSpacing: 1,
        color: colors.textSecondary,
    },
    sectionContent: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.border,
    },
});

import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText';
import { Button } from './Button';
import { Icon } from './Icons';
import { colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';

interface EmptyStateProps {
    icon?: keyof typeof Ionicons.glyphMap;
    title: string;
    description?: string;
    actionLabel?: string;
    onAction?: () => void;
    style?: StyleProp<ViewStyle>;
}

/**
 * EmptyState component for displaying empty or no-data states.
 * 
 * @param {EmptyStateProps} props - The props for the component.
 * @param {keyof typeof Ionicons.glyphMap} [props.icon='file-tray-outline'] - Icon to display.
 * @param {string} props.title - Title text.
 * @param {string} [props.description] - Optional description text.
 * @param {string} [props.actionLabel] - Optional action button label.
 * @param {() => void} [props.onAction] - Optional action button handler.
 */
export const EmptyState = ({
    icon = 'file-tray-outline',
    title,
    description,
    actionLabel,
    onAction,
    style,
}: EmptyStateProps) => {
    return (
        <View style={[styles.container, style]}>
            <Icon name={icon} size={64} color={colors.textMuted} />

            <ThemedText variant="title" style={styles.title}>
                {title}
            </ThemedText>

            {description && (
                <ThemedText style={styles.description}>
                    {description}
                </ThemedText>
            )}

            {actionLabel && onAction && (
                <Button
                    variant="primary"
                    onPress={onAction}
                    style={styles.button}
                >
                    {actionLabel}
                </Button>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        marginTop: 16,
        textAlign: 'center',
        color: colors.text,
    },
    description: {
        marginTop: 8,
        textAlign: 'center',
        color: colors.textSecondary,
        marginBottom: 24,
    },
    button: {
        minWidth: 150,
    },
});

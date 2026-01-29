import React from 'react';
import { View, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { ThemedText } from '../ui/ThemedText';
import { Icon } from '../ui/Icons';
import { colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';

interface SettingsRowProps {
    label: string;
    value?: string | boolean;
    type?: 'link' | 'toggle' | 'value';
    icon?: keyof typeof Ionicons.glyphMap;
    onPress?: () => void;
    onValueChange?: (value: boolean) => void;
}

export const SettingsRow = ({
    label,
    value,
    type = 'link',
    icon,
    onPress,
    onValueChange,
}: SettingsRowProps) => {
    const isLink = type === 'link';
    const isToggle = type === 'toggle';

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={(!isLink && type !== 'value') || !onPress}
            activeOpacity={0.7}
        >
            <View style={styles.left}>
                {icon && (
                    <View style={styles.iconContainer}>
                        <Icon name={icon} size={20} color={colors.text} />
                    </View>
                )}
                <ThemedText style={styles.label}>{label}</ThemedText>
            </View>

            <View style={styles.right}>
                {isToggle ? (
                    <Switch
                        value={value as boolean}
                        onValueChange={onValueChange}
                        trackColor={{ false: colors.surfaceHighlight, true: colors.primary }}
                        thumbColor={colors.textInverse}
                    />
                ) : (
                    <View style={styles.valueContainer}>
                        {value && (
                            <ThemedText style={styles.value}>
                                {value as string}
                            </ThemedText>
                        )}
                        {isLink && (
                            <Icon name="chevron-forward" size={20} color={colors.textSecondary} />
                        )}
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: colors.surface,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.border,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 12,
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: colors.surfaceHighlight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: colors.text,
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        color: colors.textSecondary,
        marginRight: 8,
    },
});

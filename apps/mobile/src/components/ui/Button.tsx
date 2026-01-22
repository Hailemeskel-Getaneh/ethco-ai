import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    loading?: boolean;
    style?: ViewStyle;
}

export function Button({ title, onPress, variant = 'primary', loading = false, style }: ButtonProps) {
    const getBackgroundColor = () => {
        switch (variant) {
            case 'primary': return colors.primary;
            case 'secondary': return colors.surfaceHighlight;
            case 'outline': return 'transparent';
            case 'ghost': return 'transparent';
            default: return colors.primary;
        }
    };

    const getBorderColor = () => {
        if (variant === 'outline') return colors.primary;
        return 'transparent';
    };

    const getTextColor = () => {
        if (variant === 'outline' || variant === 'ghost') return colors.primary;
        if (variant === 'secondary') return colors.text;
        return '#FFFFFF'; // Primary usually has white text
    };

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: getBackgroundColor(),
                    borderColor: getBorderColor(),
                    borderWidth: variant === 'outline' ? 1 : 0,
                },
                style,
            ]}
            onPress={onPress}
            disabled={loading}
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    text: {
        fontSize: typography.sizes.md,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

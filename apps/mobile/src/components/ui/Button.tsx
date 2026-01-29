import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { ThemedText } from './ThemedText';
import { colors } from '@/theme/colors';

interface ButtonProps extends TouchableOpacityProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    style,
    disabled,
    ...props
}: ButtonProps) => {
    const isOutline = variant === 'outline';

    // Determine background color
    let backgroundColor = 'transparent';
    if (!isOutline && variant !== 'ghost') {
        if (disabled) {
            backgroundColor = colors.surfaceHighlight;
        } else if (variant === 'primary') {
            backgroundColor = colors.primary;
        } else if (variant === 'secondary') {
            backgroundColor = colors.surfaceHighlight;
        }
    }

    const borderColor = isOutline ? (disabled ? colors.border : colors.borderHighlight) : 'transparent';

    // Determine text color
    let textColor = colors.text;
    if (disabled) {
        textColor = colors.textMuted;
    } else if (variant === 'primary') {
        textColor = colors.textInverse; // Black text on bronze button
    } else if (variant === 'ghost') {
        textColor = colors.textSecondary;
    } else if (variant === 'outline') {
        textColor = colors.text;
    }

    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor, borderColor },
                isOutline && styles.outline,
                styles[size],
                style,
            ]}
            disabled={disabled || loading}
            activeOpacity={0.7}
            {...props}
        >
            {loading ? (
                <ActivityIndicator color={textColor} />
            ) : (
                typeof children === 'string' ? (
                    <ThemedText
                        variant="defaultSemiBold"
                        style={{ color: textColor }}
                    >
                        {children}
                    </ThemedText>
                ) : children
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
    outline: {
        borderWidth: 1,
    },
    sm: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    md: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    lg: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
});

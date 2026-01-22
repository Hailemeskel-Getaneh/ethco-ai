import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, spacing, borderRadius } from '@/theme';

interface SurfaceProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

/**
 * A simple container with surface background and standard rounding.
 * Use for sections that need a subtle background distinction.
 * 
 * @param {SurfaceProps} props - The props for the component.
 */
export const Surface = ({ children, style }: SurfaceProps) => {
    return (
        <View style={[styles.surface, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    surface: {
        backgroundColor: colors.surface,
        padding: spacing.md,
        borderRadius: borderRadius.lg,
    },
});

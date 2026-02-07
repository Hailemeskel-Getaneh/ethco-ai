import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, spacing } from '@/theme';

interface DividerProps {
    margin?: keyof typeof spacing;
    style?: StyleProp<ViewStyle>;
}

/**
 * A horizontal line component to separate content.
 * 
 * @param {DividerProps} props - The props for the component.
 */
export const Divider = ({ margin = 'md', style }: DividerProps) => {
    return (
        <View
            style={[
                styles.divider,
                { marginVertical: spacing[margin] },
                style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.border,
        width: '100%',
    },
});

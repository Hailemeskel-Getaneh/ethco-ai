import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, spacing, borderRadius } from '@/theme';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    size?: number;
    color?: string;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
}

/**
 * A circular button component containing only an icon.
 * 
 * @param {IconButtonProps} props - The props for the component.
 */
export const IconButton = ({
    icon,
    onPress,
    size = 24,
    color = colors.text,
    backgroundColor = 'transparent',
    style,
}: IconButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[
                styles.button,
                { backgroundColor, width: size * 1.5, height: size * 1.5, borderRadius: (size * 1.5) / 2 },
                style,
            ]}
        >
            <Ionicons name={icon} size={size} color={color} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

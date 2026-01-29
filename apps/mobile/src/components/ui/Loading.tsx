import React from 'react';
import { View, ActivityIndicator, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors } from '@/theme/colors';
import { ThemedText } from './ThemedText';

interface LoadingProps {
    size?: 'small' | 'large';
    color?: string;
    text?: string;
    style?: StyleProp<ViewStyle>;
    fullscreen?: boolean;
}

export const Loading = ({
    size = 'small',
    color = colors.primary,
    text,
    style,
    fullscreen = false
}: LoadingProps) => {
    if (fullscreen) {
        return (
            <View style={[styles.fullscreen, style]}>
                <ActivityIndicator size="large" color={color} />
                {text && <ThemedText style={styles.text}>{text}</ThemedText>}
            </View>
        );
    }

    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size={size} color={color} />
            {text && <ThemedText style={styles.text}>{text}</ThemedText>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    fullscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    text: {
        marginTop: 10,
        color: colors.textSecondary,
    },
});

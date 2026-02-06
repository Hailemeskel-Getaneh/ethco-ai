import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { colors, borderRadius } from '@/theme';

interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    circle?: boolean;
    style?: StyleProp<ViewStyle>;
}

/**
 * A skeleton loader component with a pulse animation.
 */
export const Skeleton = ({
    width = '100%',
    height = 20,
    circle = false,
    style,
}: SkeletonProps) => {
    const opacity = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const pulse = Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0.7,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0.3,
                duration: 800,
                useNativeDriver: true,
            }),
        ]);

        Animated.loop(pulse).start();
    }, [opacity]);

    return (
        style = {
            [
            styles.skeleton,
            {
                width: width as any,
                height: height as any,
                opacity,
                borderRadius: circle ? (typeof height === 'number' ? height / 2 : 999) : borderRadius.md,
            } as any,
            style,
            ]}
        />
    );
};

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: colors.surfaceHighlight || '#E1E9EE',
    },
});

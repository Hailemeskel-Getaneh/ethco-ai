import React, { useEffect, useRef } from 'react';
import { Animated, ViewStyle, StyleProp } from 'react-native';

interface FadeInViewProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    style?: StyleProp<ViewStyle>;
}

/**
 * A wrapper component that fades in its children.
 */
export const FadeInView = ({
    children,
    duration = 500,
    delay = 0,
    style,
}: FadeInViewProps) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: duration,
            delay: delay,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, duration, delay]);

    return (
        <Animated.View
            style={[
                style,
                {
                    opacity: fadeAnim,
                },
            ]}
        >
            {children}
        </Animated.View>
    );
};

import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { spacing } from '@/theme/spacing';

interface BoxProps {
    children?: React.ReactNode;
    direction?: 'row' | 'column';
    align?: ViewStyle['alignItems'];
    justify?: ViewStyle['justifyContent'];
    gap?: keyof typeof spacing;
    padding?: keyof typeof spacing;
    margin?: keyof typeof spacing;
    flex?: number;
    wrap?: ViewStyle['flexWrap'];
    style?: StyleProp<ViewStyle>;
}

/**
 * A layout helper component for Flexbox containers.
 */
export const Box = ({
    children,
    direction = 'column',
    align,
    justify,
    gap,
    padding,
    margin,
    flex,
    wrap,
    style,
}: BoxProps) => {
    const boxStyle: ViewStyle = {
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flex,
        flexWrap: wrap,
        padding: padding ? spacing[padding] : undefined,
        margin: margin ? spacing[margin] : undefined,
    };

    // Note: React Native's gap support depends on the version. 
    // If not supported natively, this could be handled manually, 
    // but for Modern RN (0.71+) it works.
    if (gap) {
        (boxStyle as any).gap = spacing[gap];
    }

    return (
        <View style={[boxStyle, style]}>
            {children}
        </View>
    );
};

export const Row = (props: Omit<BoxProps, 'direction'>) => <Box {...props} direction="row" />;
export const Col = (props: Omit<BoxProps, 'direction'>) => <Box {...props} direction="column" />;
export const Center = (props: Omit<BoxProps, 'align' | 'justify'>) => (
    <Box {...props} align="center" justify="center" />
);

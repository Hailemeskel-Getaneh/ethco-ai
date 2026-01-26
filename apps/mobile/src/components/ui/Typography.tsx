import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

interface ThemedTextProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
    color?: string;
    weight?: 'regular' | 'medium' | 'bold';
    centered?: boolean;
}

/**
 * ThemedText component for typography with theme-aware styling.
 * 
 * @param {ThemedTextProps} props - The props for the component.
 * @param {'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label'} [props.variant='body'] - Typography variant.
 * @param {string} [props.color] - Text color override.
 * @param {'regular' | 'medium' | 'bold'} [props.weight] - Font weight.
 * @param {boolean} [props.centered] - Whether to center the text.
 */
export function ThemedText({
    style,
    variant = 'body',
    color,
    weight,
    centered,
    ...rest
}: ThemedTextProps) {

    const getStyle = () => {
        switch (variant) {
            case 'h1': return styles.h1;
            case 'h2': return styles.h2;
            case 'h3': return styles.h3;
            case 'body': return styles.body;
            case 'caption': return styles.caption;
            case 'label': return styles.label;
            default: return styles.body;
        }
    };

    const getWeight = () => {
        if (weight) return weight === 'bold' ? '700' : weight === 'medium' ? '500' : '400';
        // Defaults based on variant
        if (variant === 'h1' || variant === 'h2') return '700';
        if (variant === 'h3' || variant === 'label') return '600';
        return '400';
    };

    return (
        <Text
            style={[
                getStyle(),
                {
                    color: color || colors.text,
                    fontWeight: getWeight() as any,
                    textAlign: centered ? 'center' : 'auto',
                },
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    h1: { fontSize: 32, lineHeight: 40 },
    h2: { fontSize: 24, lineHeight: 32 },
    h3: { fontSize: 20, lineHeight: 28 },
    body: { fontSize: 16, lineHeight: 24 },
    label: { fontSize: 14, lineHeight: 20 },
    caption: { fontSize: 12, lineHeight: 16 },
});

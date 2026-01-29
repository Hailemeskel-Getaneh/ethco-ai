import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { ThemedText } from './ThemedText';
import { colors } from '@/theme/colors';

interface AvatarProps {
    source?: ImageSourcePropType | string;
    initials?: string;
    size?: number;
    online?: boolean;
}

export const Avatar = ({
    source,
    initials,
    size = 40,
    online
}: AvatarProps) => {
    const borderRadius = size / 2;
    const fontSize = size * 0.4;

    const imageSource = typeof source === 'string' ? { uri: source } : source;

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            {imageSource ? (
                <Image
                    source={imageSource}
                    style={{ width: size, height: size, borderRadius }}
                    resizeMode="cover"
                />
            ) : (
                <View
                    style={[
                        styles.fallback,
                        {
                            width: size,
                            height: size,
                            borderRadius,
                            backgroundColor: colors.surfaceHighlight
                        }
                    ]}
                >
                    <ThemedText
                        variant="defaultSemiBold"
                        style={{ fontSize, color: colors.textSecondary }}
                    >
                        {initials?.slice(0, 2).toUpperCase()}
                    </ThemedText>
                </View>
            )}

            {online && (
                <View
                    style={[
                        styles.badge,
                        {
                            width: size * 0.3,
                            height: size * 0.3,
                            borderRadius: (size * 0.3) / 2,
                            bottom: 0,
                            right: 0,
                        }
                    ]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    fallback: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.border,
    },
    badge: {
        position: 'absolute',
        backgroundColor: colors.success,
        borderWidth: 2,
        borderColor: colors.background,
    },
});

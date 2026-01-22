import React from 'react';
import { View, StyleSheet, ViewStyle, SafeAreaView, StatusBar as RNStatusBar, Platform } from 'react-native';
import { colors } from '@/theme/colors';

interface ScreenProps {
    children: React.ReactNode;
    style?: ViewStyle;
    safeArea?: boolean; // Whether to include SafeAreaView padding
    backgroundColor?: string;
}

export function Screen({
    children,
    style,
    safeArea = true,
    backgroundColor = colors.background
}: ScreenProps) {

    const Container = safeArea ? SafeAreaView : View;

    return (
        <Container style={[styles.container, { backgroundColor }, style]}>
            <View style={[styles.content]}>
                {children}
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20, // Global horizontal padding
    }
});

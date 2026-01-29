import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, StatusBarStyle, ViewStyle, StyleProp } from 'react-native';
import { colors } from '@/theme/colors';

interface ScreenProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    safeArea?: boolean;
    statusBarStyle?: StatusBarStyle;
    backgroundColor?: string;
}

export const Screen = ({
    children,
    style,
    safeArea = true,
    statusBarStyle = 'light-content',
    backgroundColor = colors.background
}: ScreenProps) => {
    const Container = safeArea ? SafeAreaView : View;

    return (
        <Container style={[styles.container, { backgroundColor }, style]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={backgroundColor} />
            <View style={styles.content}>
                {children}
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});

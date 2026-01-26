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

/**
 * Screen component for wrapping screen content with safe area and status bar.
 * 
 * @param {ScreenProps} props - The props for the component.
 * @param {React.ReactNode} props.children - Child components.
 * @param {boolean} [props.safeArea=true] - Whether to use SafeAreaView.
 * @param {StatusBarStyle} [props.statusBarStyle='light-content'] - Status bar style.
 * @param {string} [props.backgroundColor=colors.background] - Background color.
 */
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

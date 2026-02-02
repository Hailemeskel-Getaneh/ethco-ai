import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: colors.background },
                    headerTintColor: colors.text,
                    contentStyle: { backgroundColor: colors.background },
                    headerTitleStyle: {
                        fontFamily: typography.fontFamily.bold,
                        fontSize: typography.sizes.lg,
                        fontWeight: typography.weights.bold as any,
                    },
                    headerBackTitleStyle: {
                        fontFamily: typography.fontFamily.regular,
                    },
                    headerShadowVisible: false,
                }}
            >
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/index" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="signup" options={{ headerShown: false }} />
                <Stack.Screen
                    name="conversations"
                    options={{
                        title: 'Conversations',
                        headerLargeTitle: true,
                    }}
                />
                <Stack.Screen
                    name="chat/[id]"
                    options={{
                        title: 'Chat',
                        headerBackTitle: 'Back',
                    }}
                />
                <Stack.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        presentation: 'modal',
                    }}
                />
            </Stack>
        </GestureHandlerRootView>
    );
}

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from '@/theme/colors';

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: colors.background },
                    headerTintColor: colors.text,
                    contentStyle: { backgroundColor: colors.background },
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            >
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </GestureHandlerRootView>
    );
}

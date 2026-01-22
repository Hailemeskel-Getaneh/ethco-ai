import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';

export default function AppLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: colors.background },
                headerTintColor: colors.text,
                contentStyle: { backgroundColor: colors.background },
                headerTitleStyle: { fontWeight: 'bold' },
                headerShadowVisible: false, // Clean look
            }}
        >
            <Stack.Screen
                name="index"
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
    );
}

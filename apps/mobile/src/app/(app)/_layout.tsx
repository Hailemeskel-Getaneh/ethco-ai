import { Stack } from 'expo-router';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export default function AppLayout() {
    return (
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
                headerShadowVisible: false, // Clean look
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Conversations',
                    headerLargeTitle: true,
                    headerLargeTitleStyle: {
                        color: colors.text,
                        fontFamily: typography.fontFamily.bold,
                        fontWeight: typography.weights.bold as any,
                    }
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

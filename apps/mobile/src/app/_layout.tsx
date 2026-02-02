import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Icon } from '@/components/ui/Icons';
import { CustomDrawerContent } from '@/components/navigation/CustomDrawer';
import { colors } from '@/theme/colors';
import { typography } from '@/theme/typography';

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={({ navigation }) => ({
                    headerStyle: { backgroundColor: colors.background },
                    headerTintColor: colors.text,
                    headerTitleStyle: {
                        fontFamily: typography.fontFamily.bold,
                        fontSize: typography.sizes.lg,
                        fontWeight: typography.weights.bold as any,
                    },
                    headerShadowVisible: false,
                    drawerStyle: {
                        backgroundColor: colors.surface,
                        width: '80%',
                    },
                    drawerType: 'slide',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()}
                            style={{ marginLeft: 16 }}
                        >
                            <Icon name="menu" size={28} color={colors.text} />
                        </TouchableOpacity>
                    ),
                })}
            >
                <Drawer.Screen name="index" options={{ headerShown: false }} />
                <Drawer.Screen name="onboarding/index" options={{ headerShown: false }} />
                <Drawer.Screen name="login" options={{ headerShown: false }} />
                <Drawer.Screen name="signup" options={{ headerShown: false }} />
                <Drawer.Screen
                    name="conversations"
                    options={({ navigation }) => ({
                        title: 'Ethco AI',
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.toggleDrawer()}
                                style={{ marginLeft: 16 }}
                            >
                                <Icon name="menu" size={28} color={colors.text} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => (navigation as any).navigate('settings')}
                                style={{ marginRight: 16 }}
                            >
                                <Icon name="person-circle-outline" size={28} color={colors.text} />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Drawer.Screen
                    name="chat/[id]"
                    options={({ navigation }) => ({
                        title: 'Chat',
                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => navigation.toggleDrawer()}
                                style={{ marginLeft: 16 }}
                            >
                                <Icon name="menu" size={28} color={colors.text} />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => (navigation as any).navigate('settings')}
                                style={{ marginRight: 16 }}
                            >
                                <Icon name="person-circle-outline" size={28} color={colors.text} />
                            </TouchableOpacity>
                        ),
                    })}
                />
                <Drawer.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        headerShown: true,
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}

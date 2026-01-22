import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Screen } from '@/components/ui/Screen';
import { ThemedText } from '@/components/ui';
import { ChatBubble } from '@/components/chat/ChatBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { sendMessageMock, Message } from '@/services/mockAI';
import { colors } from '@/theme/colors';


// -- Mock Mode Selector Component --
function ModeSelector() {
    const modes = ['Chat', 'Reason', 'Code'];
    const [active, setActive] = useState('Chat');

    return (
        <View style={styles.modeSelector}>
            {modes.map(m => (
                <TouchableOpacity
                    key={m}
                    onPress={() => setActive(m)}
                    style={[styles.modeChip, active === m && styles.modeChipActive]}
                >
                    <ThemedText
                        variant="caption"
                        weight="medium"
                        color={active === m ? colors.background : colors.textSecondary}
                    >
                        {m}
                    </ThemedText>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default function ChatScreen() {
    const { id } = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        // Initial greeting if new chat
        if (messages.length === 0) {
            setMessages([
                {
                    id: 'init',
                    role: 'assistant',
                    content: 'Hello. How can I assist you today?',
                    createdAt: Date.now(),
                }
            ]);
        }
    }, []);

    const handleSend = async (text: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
            createdAt: Date.now(),
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        try {
            // Create a specific ID for the assistant response so we can stream into it
            const responseId = (Date.now() + 1).toString();
            let fullContent = '';

            // Add empty assistant message first
            setMessages(prev => [...prev, {
                id: responseId,
                role: 'assistant',
                content: '', // Start empty
                createdAt: Date.now(),
            }]);

            await sendMessageMock(text, (token) => {
                fullContent += token;
                setMessages(prev => prev.map(msg =>
                    msg.id === responseId
                        ? { ...msg, content: fullContent }
                        : msg
                ));
            });

        } catch (error) {
            console.error(error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <Screen style={styles.container} safeArea={false}>
                <View style={styles.headerContainer}>
                    <ModeSelector />
                </View>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ChatBubble message={item} />}
                    contentContainerStyle={styles.listContent}
                    onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
                />
                <ChatInput onSend={handleSend} disabled={isTyping} />
            </Screen>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    headerContainer: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
    },
    modeSelector: {
        flexDirection: 'row',
        backgroundColor: colors.surface,
        borderRadius: 20,
        padding: 2,
    },
    modeChip: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 18,
    },
    modeChipActive: {
        backgroundColor: colors.primary,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
});

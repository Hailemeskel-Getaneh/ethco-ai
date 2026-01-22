export type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    createdAt: number;
};

export interface Conversation {
    id: string;
    title: string;
    lastMessage: string;
    date: string;
}

export const mockConversations: Conversation[] = [
    { id: '1', title: 'Life in the Universe', lastMessage: 'It is theoretically possible...', date: '10:30 AM' },
    { id: '2', title: 'React Native Help', lastMessage: 'Use FlatList for performance.', date: 'Yesterday' },
    { id: '3', title: 'Recipe Ideas', lastMessage: 'How about a risotto?', date: 'Mon' },
];

export async function sendMessageMock(text: string, onToken: (token: string) => void): Promise<string> {
    const responses = [
        "That's an interesting perspective. Let me think about that for a moment.",
        "Based on my internal data, the answer is multi-faceted. Here is a breakdown:\n\n1. First, consider the scalability.\n2. Second, modularity is key.\n\nDoes that help?",
        "I can certainly help with that. Could you clarify your requirements further?",
        "Processing your request... Here is a drafted response based on the parameters provided.",
    ];

    const response = responses[Math.floor(Math.random() * responses.length)];

    // Simulate network initialization delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // Simulate streaming
    const tokens = response.split(' ');
    for (const token of tokens) {
        await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 50)); // Variable typing speed
        onToken(token + ' ');
    }

    return response;
}

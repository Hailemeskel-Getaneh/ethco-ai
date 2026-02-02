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
    timestamp: number;
}

export interface UserProfile {
    name: string;
    email: string;
    avatar?: string;
}

export const mockUser: UserProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
};

export const mockConversations: Conversation[] = [
    { id: '1', title: 'Life in the Universe', lastMessage: 'It is theoretically possible...', date: '10:30 AM', timestamp: Date.now() - 1000 * 60 * 30 },
    { id: '2', title: 'React Native Help', lastMessage: 'Use FlatList for performance.', date: '9:15 AM', timestamp: Date.now() - 1000 * 60 * 120 },
    { id: '3', title: 'Recipe Ideas', lastMessage: 'How about a risotto?', date: 'Yesterday', timestamp: Date.now() - 1000 * 60 * 60 * 24 },
    { id: '4', title: 'Travel Planning', lastMessage: 'Consider visiting Japan in spring.', date: 'Yesterday', timestamp: Date.now() - 1000 * 60 * 60 * 26 },
    { id: '5', title: 'Workout Routine', lastMessage: 'Start with compound exercises.', date: '2 days ago', timestamp: Date.now() - 1000 * 60 * 60 * 48 },
    { id: '6', title: 'Book Recommendations', lastMessage: 'Try "The Midnight Library".', date: '3 days ago', timestamp: Date.now() - 1000 * 60 * 60 * 72 },
    { id: '7', title: 'Career Advice', lastMessage: 'Focus on continuous learning.', date: 'Last week', timestamp: Date.now() - 1000 * 60 * 60 * 24 * 7 },
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


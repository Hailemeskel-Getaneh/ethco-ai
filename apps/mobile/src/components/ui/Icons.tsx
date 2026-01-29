import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';

// Wrapper for consistency and easier refactoring
// Using Ionicons as the standard set
export const Icon = ({
    name,
    size = 24,
    color = colors.text
}: {
    name: keyof typeof Ionicons.glyphMap;
    size?: number;
    color?: string
}) => {
    return <Ionicons name={name} size={size} color={color} />;
};

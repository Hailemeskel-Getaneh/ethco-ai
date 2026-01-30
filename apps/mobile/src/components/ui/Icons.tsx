import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';

// Wrapper for consistency and easier refactoring
// Using Ionicons as the standard set
/**
 * Icon component wrapper around Ionicons.
 * 
 * @param {object} props - The props for the component.
 * @param {keyof typeof Ionicons.glyphMap} props.name - The name of the icon.
 * @param {number} [props.size=24] - The size of the icon.
 * @param {string} [props.color=colors.text] - The color of the icon.
 */
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

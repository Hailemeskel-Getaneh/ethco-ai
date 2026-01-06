import { colors } from './colors';

/**
 * Semantic color mapping for consistent meaningful colors.
 */
export const semanticColors = {
    // Actions
    active: colors.primary,
    inactive: colors.textMuted,
    disabled: colors.surfaceHighlight,

    // Status
    info: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',

    // UI Elements
    divider: colors.border,
    overlay: 'rgba(0, 0, 0, 0.5)',

    // Interactive
    hover: 'rgba(212, 175, 55, 0.1)', // Subtle primary tint
    pressed: 'rgba(212, 175, 55, 0.2)',
};

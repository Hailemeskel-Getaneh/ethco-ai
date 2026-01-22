import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from './Input';
import { colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onClear?: () => void;
}

/**
 * A specialized Input component for search functionality.
 */
export const SearchInput = ({
    value,
    onChangeText,
    placeholder = 'Search...',
    onClear,
}: SearchInputProps) => {
    const handleClear = () => {
        onChangeText('');
        if (onClear) onClear();
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
            <Input
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                containerStyle={styles.inputContainer}
                style={styles.input}
            />
            {value.length > 0 && (
                <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                    <Ionicons name="close-circle" size={18} color={colors.textMuted} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
    },
    inputContainer: {
        flex: 1,
        marginBottom: 0,
    },
    input: {
        paddingLeft: 40,
        paddingRight: 40,
    },
    clearButton: {
        position: 'absolute',
        right: 12,
        zIndex: 1,
    },
});

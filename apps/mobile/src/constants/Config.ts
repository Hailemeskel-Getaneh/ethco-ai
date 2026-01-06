/**
 * App-wide configuration constants.
 */
export const Config = {
    /** App Name */
    name: 'Ethco AI',
    /** Client Version */
    version: '1.0.0',
    /** Default API URL (Mock for now) */
    apiUrl: 'https://api.ethco.ai/v1',
    /** Chat Configuration */
    chat: {
        maxMessageLength: 2000,
        typingTimeout: 3000,
    },
    /** Feature Flags */
    features: {
        enableExperimentalModels: true,
        enableNotifications: false,
    },
};

export declare const log: {
    info: (message: string) => void;
    success: (message: string) => void;
    chat: (user: string, message: string) => void;
    joined: (player: unknown) => void;
    left: (player: unknown) => void;
};

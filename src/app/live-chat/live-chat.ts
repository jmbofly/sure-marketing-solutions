export interface User {
    id?: string;
    name?: string;
    email?: string;
    messages?: {
        sent: any[],
        recieved: any[]
    };
    log?: any[];
}

export interface Support {
    messages?: {
        sent: ChatMessage[],
        recieved: ChatMessage[],
    };
    log?: any[];
}

export interface ThreadHistory {
    initTime?: Date;
    messages?: ChatMessage[];
    log?: any[];

}

export interface ChatMessage {
    type?: 'user' | 'support';
    timestamp?: Date;
    text?: string;
}

export interface LiveChat {
    user: User;
    support: Support;
    history: ThreadHistory;
}


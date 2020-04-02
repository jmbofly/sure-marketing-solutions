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

export interface MainThread {
    initTime?: Date;
    messages?: ChatMessage[];
    log?: any[];

}

export interface ChatMessage {
    type?: 'user' | 'support';
    timestamp?: Date;
    text?: string;
    body?: any;
}

export interface LiveChat {
    user: User;
    support: Support;
    thread: MainThread;
}


export interface ChatBotMessage {
    order?: number;
    type?: 'message' | 'choice';
    content?: string;
    sender?: 'bot' | 'visitor';
}

export interface ChatOptionPrompt {
    type: 'input' | 'select' | 'button';
    value: string;
}

export const CHAT_BOT_MESSAGES: ChatBotMessage[] = [
    { order: 0, content: `<p>Welcome!</p>`, sender: 'bot', type: 'message' },
    { order: 1, content: `<p>What brought you to suremarketingsolutions.com today?</p>`, sender: 'bot', type: 'message' },
    { order: 2, content: `<p>Great! I'm happy to help you with that!</p>`, sender: 'bot', type: 'message' },
    { order: 3, content: `<p>Could I get your name?</p>`, sender: 'bot', type: 'message' },
    { order: 4, content: `<p>Thank you!</p>`, sender: 'bot', type: 'message' },
    { order: 5, content: `<p>What's your company's name?</p>`, sender: 'bot', type: 'message' },
    { order: 6, content: `<p>Got it! Thank you!</p>`, sender: 'bot', type: 'message' },
    { order: 8, content: `<p>Could I please have your email address so one of our creative consultants can follow up with you?</p>`, sender: 'bot', type: 'message' },
    { order: 9, content: `<p>Awesome! Thanks!</p>`, sender: 'bot', type: 'message' },
    { order: 10, content: `<p>One of our consultants will be in touch as soon as they can. If you have any further questions, please contact us at <a href="www.suremarketingsolutions.com" target="_blank">info@suremarketingsolutions.com</a></p>`, sender: 'bot', type: 'message' },
    { order: 11, content: ``, sender: 'bot', type: 'message' },
];

export const CHAT_PROMPTS: ChatOptionPrompt[] = [
    {type: 'input', value: ''}
]

export const InitialChatIncrement = {
    botMessages: [
        { order: 0, content: `<p>Welcome!</p>` },
        { order: 1, content: `<p>What brought you to suremarketingsolutions.com today?</p>`},
    ]
}
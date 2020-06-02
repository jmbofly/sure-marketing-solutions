export interface Contact {
    firstName?: string;
    lastName?: string;
    topic?: string;
    email?: string;
    phone?: string;
    canCall?: boolean;
    subject?: string;
    message?: string;
};

export const TOPICS: string[] = [
    'website',
    'branding',
    'email',
    'seo',
    'other',
];

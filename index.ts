export interface User {
    id: number;
    name: string;
    email: string;
    role: 'officer' | 'admin' | 'citizen';
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}
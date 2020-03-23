export interface Testimonial {
    id?: string;
    src?: string;
    alt?: string,
    caption?: string;
    name?: string;
    position?: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 'GTS',
        src: 'person_1.jpg',
        caption: `I am very impressed with Sure Marketing Solutions. Proffesional and attentive. I will absolutley reccomend them to everyone.`,
        name: `Kevin Szkolnik`,
        position: 'GTS, CEO'
    },
    {
        id: 'MEDTELPLUS',
        src: 'person_2.jpg',
        caption: `I had no idea that my business had this much potential! Thanks for your hardwork.`,
        name: `Henry Dee`,
        position: 'MedTelPlus, VP of Marketing'
    },
    {
        id: 'REVLITE',
        src: 'person_3.jpg',
        caption: `Amazing work everyone!`,
        name: `Henry Dee`,
        position: 'Rev-lite Automotive Repairs, Co-owner'
    },
    {
        id: 'GARLICROSE',
        src: 'person_4.jpg',
        caption: `When other businesses are losing customers, we have done better than ever. Thanks team!`,
        name: 'Richard Smith',
        position: 'The Garlic Rose Eatery, Owner'
    },
    {
        id: 'INLAYSHINE',
        src: 'person_1.jpg',
        caption: `Beautiful website. We love it! Thank you!!!! :)`,
        name: `Ken Bosh`,
        position: 'Inlay Shine Designs, Owner'
    },
    {
        id: 'MEDTELPLUS',
        src: 'person_2.jpg',
        caption: `I had no idea that my business had this much potential! Thanks for your hardwork.`,
        name: `Henry Dee`,
        position: 'MedTelPlus, VP of Marketing'
    },
];
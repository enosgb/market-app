export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
    {
        id: 1,
        name: 'IPhone XL',
        price: 4999,
        description: 'IPhone extra largo com uma das melhores telas para smartphones.'
    },
    {
        id: 2,
        name: 'IPhone SE',
        price: '2999',
        description: 'IPhone SE com uma tela menor e com umas das melhores cameras para smartphones.'
    },
    {
        id: 3,
        name: 'Motorola E5i',
        price: '1500',
        description: 'O Smarphone com o melhor custo beneficio do mercado.'
    }
]
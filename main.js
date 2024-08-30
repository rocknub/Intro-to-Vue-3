const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2234, color: 'green'
                },
                {
                    id: 2235, color: 'blue'
                }
            ],
            sizes: [
                {
                    id: 1, size: 'P'
                },
                {
                    id: 2, size: 'M'
                },
                {
                    id: 3, size: 'G'
                },
                {
                    id: 4, size: 'GG'
                },
                {
                    id: 5, size: 'XG'
                }
            ] 
        };
    }
});

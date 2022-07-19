import { render } from '@testing-library/react';
import DetailProduct from './DetailProduct';

describe('DetailProduct', () => {

    it('validate renders search item kindle', () => {

        const productDetail = {
            id: 'MLA1135260991',
            title: 'E-reader  Kindle Paperwhite 10 Gen 8gb Azul Con Pantalla De 6  300ppp',
            price: {
                currency: 'ARS',
                amount: 35650
            },
            picture: 'http://http2.mlstatic.com/D_674706-MLA40690247901_022020-I.jpg',
            condition: 'new',
            free_shipping: true,
            sold_quantity: 100,
            tags: [
                'good_quality_picture',
                'good_quality_thumbnail',
                'extended_warranty_eligible',
                'immediate_payment',
                'cart_eligible'
            ],
            description: 'Con este E-reader Kindle, podrás almacenar los libros que más te gustan y llevarlos a todos lados.\n A diferencia de otros dispositivos digitales, los libros electrónicos tienen una tinta electrónica que nos permite leer con una calidad similar a la del papel, sin demasiada fatiga visual. Además, este tipo de pantalla consume menos energía, por lo tanto, la batería puede durar días. ¡Volá con tu imaginación donde sea que estés!\n\nMúltiples formatos\nEste dispositivo soporta una gran variedad de formatos de archivos, lo que te permitirá acceder a una mayor cantidad de textos.\n\nCuida tu vista\nEste E-reader cuenta luz de lectura que se distribuye por la pantalla para no impactar directamente en tu vista. Esto te permitirá leer durante largos períodos de tiempo sin sentir cansancio en tus ojo.\n\nAccesibilidad y comodidad\n¿Te gusta hacer actividades mientras escuchás un libro? Ahora es posible, ya que este dispositivo es compatible con audiolibros. Esto no solo brinda comodidad para quienes prefieren escuchar los textos, sino que garantiza una mayor accesibilidad para personas ciegas o con disminución visual.',
            img: [
                {
                    id: '674706-MLA40690247901_022020',
                    url: 'http://http2.mlstatic.com/D_674706-MLA40690247901_022020-O.jpg',
                    secure_url: 'https://http2.mlstatic.com/D_674706-MLA40690247901_022020-O.jpg',
                    size: '348x500',
                    max_size: '1093x1568',
                    quality: ''
                },
                {
                    id: '999603-MLA40690247588_022020',
                    url: 'http://http2.mlstatic.com/D_999603-MLA40690247588_022020-O.jpg',
                    secure_url: 'https://http2.mlstatic.com/D_999603-MLA40690247588_022020-O.jpg',
                    size: '494x500',
                    max_size: '1114x1126',
                    quality: ''
                }
            ]
        };

        const { container } = render(<DetailProduct data={productDetail} />);

        expect(container).toMatchSnapshot();
    });

})
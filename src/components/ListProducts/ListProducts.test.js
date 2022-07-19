import { render } from '@testing-library/react';
import ListProducts from './ListProducts';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: ({ children, ...rest }) => <a data-testid='link' {...rest} >{children}</a>
}));

describe('ListProducts', () => {

    it('renders', () => {

        const id = 'MLA1135260991';
        const image = 'http://http2.mlstatic.com/D_674706-MLA40690247901_022020-I.jpg';
        const price = 35650;
        const tittle = 'E-reader  Kindle Paperwhite 10 Gen 8gb Azul Con Pantalla De 6  300ppp';
        const address = 'Capital Federal';
        const tags = [
            'good_quality_picture',
            'good_quality_thumbnail',
            'extended_warranty_eligible',
            'immediate_payment',
            'cart_eligible'
        ];

        const { container } = render(
            <ListProducts
                id={id}
                image={image}
                price={price}
                tittle={tittle}
                address={address}
                tags={tags}
            />
        );

        expect(container).toMatchSnapshot();
    });
    
});
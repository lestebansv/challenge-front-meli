import { render } from '@testing-library/react';
import Products from './products';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => {
        return {
            pathname: '/items',
            state: {},
            key: '',
            search: 'kindle',
            hash: '',
        }
    }
}));

describe('Products', () => {

    it('validate render view', async () => {
        const categories = ['Computación'];

        const { container } = render(<Products data={categories} />);

        expect(container).toMatchSnapshot();
    });
    
});
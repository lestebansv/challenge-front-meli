import connection from './channel';

const data = {
  author: {
    name: 'Ludwin Esteban',
    lastname: 'Sichacá Valbuena'
  },
  categories: [
    'Computación',
    'Tablets y Accesorios',
    'E-readers'
  ],
  items: [
    {
      id: 'MLA1135260991',
      title: 'E-reader  Kindle Paperwhite 10 Gen 8gb Azul Con Pantalla De 6  300ppp',
      price: {
        currency: 'ARS',
        amount: 35650
      },
      picture: 'http://http2.mlstatic.com/D_674706-MLA40690247901_022020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 110,
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'TUxBQkZMTzg5MjFa',
        city_name: 'Floresta'
      },
      tags: [
        'extended_warranty_eligible',
        'good_quality_picture',
        'good_quality_thumbnail',
        'immediate_payment',
        'cart_eligible',
        'best_seller_candidate',
        'shipping_guaranteed'
      ]
    },
    {
      id: 'MLA1130141249',
      title: 'E-reader  Kindle Paperwhite 10 Gen 8gb Negro Con Pantalla De 6  300ppp',
      price: {
        currency: 'ARS',
        amount: 44700
      },
      picture: 'http://http2.mlstatic.com/D_918161-MLA40690247970_022020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 0,
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'TUxBQkFMTTMwNTBa',
        city_name: 'Almagro'
      },
      tags: [
        'extended_warranty_eligible',
        'good_quality_picture',
        'good_quality_thumbnail',
        'immediate_payment',
        'cart_eligible',
        'best_seller_candidate',
        'shipping_guaranteed'
      ]
    },
    {
      id: 'MLA1130158360',
      title: 'E-reader  Kindle Paperwhite 10 Gen 32gb Negro Con Pantalla De 6  300ppp',
      price: {
        currency: 'ARS',
        amount: 44999
      },
      picture: 'http://http2.mlstatic.com/D_881296-MLA40690247963_022020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 97,
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: 'TUxBQkNPRzY5MTZa',
        city_name: 'Coghlan'
      },
      tags: [
        'extended_warranty_eligible',
        'good_quality_picture',
        'good_quality_thumbnail',
        'immediate_payment',
        'cart_eligible',
        'best_seller_candidate'
      ]
    },
    {
      id: 'MLA1140308646',
      title: 'E-reader  Kindle 10 Gen 4gb Negro Con Pantalla De 6  167ppp',
      price: {
        currency: 'ARS',
        amount: 39699
      },
      picture: 'http://http2.mlstatic.com/D_806676-MLA40691523169_022020-I.jpg',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 5,
      address: {
        state_id: 'AR-B',
        state_name: 'Buenos Aires',
        city_id: null,
        city_name: 'Quequen'
      },
      tags: [
        'extended_warranty_eligible',
        'good_quality_picture',
        'good_quality_thumbnail',
        'immediate_payment',
        'cart_eligible',
        'best_seller_candidate',
        'shipping_guaranteed'
      ]
    }
  ]
}

it('finds products items', async () => {
  const mockFetch = Promise.resolve({ json: () => Promise.resolve(data) });

  global.fetch = jest.fn().mockImplementation(() => mockFetch);
  const data_res = await connection(10, 'product');

  expect(data_res).toEqual(data);
});

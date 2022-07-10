import {render} from '@testing-library/react';
import Trips from '../components/Trips';

const tripsData = [
    {
        "id": 1,
        "title": "European Quest",
        "imageSrc": "https://cdn.pixabay.com/photo/2022/06/20/05/36/landscape-7273091_960_720.jpg",
        "numberOfCountries": 11,
        "numberOfDays": 25,
        "rate": 4.6,
        "currency": "€",
        "minPrice": 2877,
        "minPriceOld": 3385
    },
    {
        "id": 2,
        "title": "Simply Italy",
        "imageSrc": "https://cdn.pixabay.com/photo/2022/06/15/18/38/castle-7264439_960_720.jpg",
        "numberOfCountries": 2,
        "numberOfDays": 15,
        "rate": 4.4,
        "currency": "€",
        "minPrice": 1832,
        "minPriceOld": 2155
    },
    {
        "id": 3,
        "title": "Italian Espresso",
        "imageSrc": "https://cdn.pixabay.com/photo/2022/06/18/21/40/strasbourg-7270721_960_720.jpg",
        "numberOfCountries": 1,
        "numberOfDays": 10,
        "rate": 4.5,
        "currency": "€",
        "minPrice": 1245,
        "minPriceOld": 1465
    },
];

beforeEach(() => {
    jest.spyOn(window,"fetch").mockImplementation(tripsData);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("show trips", async () => {
    const { container } = render(<Trips trips={tripsData}/>);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    expect(container.querySelectorAll('.trips__card')).toHaveLength(tripsData.length);    
})
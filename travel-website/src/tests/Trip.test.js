import { render, screen } from '@testing-library/react';
import Trip from '../components/Trip';

const tripData = {
    "id": 1,
    "title": "European Quest",
    "imageSrc": "https://cdn.pixabay.com/photo/2022/06/20/05/36/landscape-7273091_960_720.jpg",
    "numberOfCountries": 11,
    "numberOfDays": 25,
    "rate": 4.6,
    "currency": "€",
    "minPrice": 2877,
    "minPriceOld": 3385
};

beforeEach(() => {
    jest.spyOn(window,"fetch").mockImplementation(tripData);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("show trip data", async () => {
    const { container } = render(<Trip key={tripData.id} {...tripData}/>);
    expect(screen.getByRole('img')).toHaveAttribute('src',tripData.imageSrc);
    expect(screen.getByRole('heading',{level: 3})).toHaveTextContent(tripData.title);
    expect(screen.getByRole('heading',{level: 4})).toHaveTextContent(`${tripData.numberOfCountries} ${tripData.numberOfCountries!==1 ? 'Countries' : 'Country'}`);
    expect(screen.getByRole('heading',{level: 4})).toHaveTextContent(`${tripData.numberOfDays} ${tripData.numberOfDays!==1 ? 'Days' : 'Day'}`);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    expect(container.querySelector('.trips__price-base').textContent).toContain(`From ${tripData.currency+tripData.minPrice?.toLocaleString('en-US')}`);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    expect(container.querySelector('.trips__price-base').textContent).toContain(`From ${tripData.currency+tripData.minPrice?.toLocaleString('en-US')}`);
})
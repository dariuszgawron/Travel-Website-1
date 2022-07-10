import {render} from '@testing-library/react';
import TripRating from '../components/TripRating';

const tripRate = {
    "id": 1,
    "rate": 3.5
};
const maxRate=5;

beforeEach(() => {
    jest.spyOn(window,"fetch").mockImplementation(tripRate);
});

afterEach(() => {
    jest.restoreAllMocks();
});

test("display rating", async () => {
    const { container } = render(<TripRating tripId={tripRate.id} maxRate={maxRate} averageRate={tripRate.rate} />);
    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    expect(container.querySelectorAll('.trips-rate__icon')).toHaveLength(maxRate);    
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll('.fa-solid.fa-star')).toHaveLength(3);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll('.fa-regular.fa-star-half-stroke')).toHaveLength(1);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll('.fa-regular.fa-star')).toHaveLength(1);
})
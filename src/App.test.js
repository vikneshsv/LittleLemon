import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByTestId("head");
  expect(headingElement).toBeInTheDocument();
})



import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

test('Renders the Header heading', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
render(<BrowserRouter><App /></BrowserRouter>);
const reserveButton = screen.getByRole("button");
fireEvent.click(reserveButton);
})


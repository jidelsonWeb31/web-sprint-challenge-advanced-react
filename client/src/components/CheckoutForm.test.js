import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { Simulate } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />);

    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const handler = jest.fn(e => e.preventDefault())
  const {getByTestId} = render(
    <form onSubmit={handler} data-testid="successMessage">
      <button>Checkout</button>
    </form>,
  )
  fireEvent.submit(getByTestId('successMessage'))
  expect(handler).toHaveBeenCalledTimes(1)
    

});



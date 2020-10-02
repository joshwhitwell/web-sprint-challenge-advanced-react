import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //render component
    render(<CheckoutForm />)
    
    //get form header
    const formHeader = screen.getByText(/checkout form/i)

    //assert form header renders
    expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    //render component
    render(<CheckoutForm />)

    //get form inputs
    const fnInput = screen.getByLabelText(/first name/i)
    const lnInput = screen.getByLabelText(/last name/i)
    const adInput = screen.getByLabelText(/address/i)
    const ctInput = screen.getByLabelText(/city/i)
    const stInput = screen.getByLabelText(/state/i)
    const zpInput = screen.getByLabelText(/zip/i)
    const button = screen.getByRole('button', {name: /checkout/i})

    //fire events
    fireEvent.change(fnInput, {target: {value: 'Josh'}})
    fireEvent.change(lnInput, {target: {value: 'Whitwell'}})
    fireEvent.change(adInput, {target: {value: '803 Rialto Streete'}})
    fireEvent.change(ctInput, {target: {value: 'Charlottesville'}})
    fireEvent.change(stInput, {target: {value: 'VA'}})
    fireEvent.change(zpInput, {target: {value: '22902'}})
    fireEvent.click(button)

    //assert
    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeTruthy()
});

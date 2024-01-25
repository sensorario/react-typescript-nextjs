import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Sensorario from '../../src/Sensorario/Sensorario';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('renderizza il componente Sensorario', () => {
    render(<Sensorario />);
    const element = screen.getByText(/Simone Gentili/);
    expect(element).toBeInTheDocument();
});

test('contiene un bottone con testo "press me"', () => {
    render(<Sensorario />);
    const element = screen.getByText(/press me/);
    expect(element).toBeInTheDocument();
    expect(element).toBeInstanceOf(HTMLButtonElement);
});

test('cambia il testo del bottone al click', async () => {
    render(<Sensorario />);
    const buttonElement = screen.getByText(/press me/);
    expect(buttonElement).toBeInTheDocument();
    userEvent.click(buttonElement);
    await waitFor(() => {
        expect(buttonElement).toHaveTextContent(/premimi/);
    });
    userEvent.click(buttonElement);
    await waitFor(() => {
        expect(buttonElement).toHaveTextContent(/press me/);
    });
});
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Toggle from './index';

describe('Toggle', () => {
    const defaultProps = {
        toggle: {
            name: 'test',
            label: 'Test'
        },
        onChange: () => {
        }
    };
    it('renders a checked toggle when value is "true"', () => {
        const props = {...defaultProps, value: true};
        render(<Toggle {...props} />);
        expect(screen.getByLabelText(defaultProps.toggle.label)).toBeChecked();
    });
    it('renders an unchecked toggle when value is "false"', () => {
        const props = {...defaultProps, value: false};
        render(<Toggle {...props} />);
        expect(screen.getByLabelText(defaultProps.toggle.label)).not.toBeChecked();
    });
    it('renders an unchecked toggle when value is undefined', () => {
        render(<Toggle {...defaultProps} />);
        expect(screen.getByLabelText(defaultProps.toggle.label)).not.toBeChecked();
    });
    it('renders a checked toggle when value is an object', () => {
        const props = {...defaultProps, value: {add: true}};
        render(<Toggle {...props} />);
        expect(screen.getByLabelText(defaultProps.toggle.label)).toBeChecked();
    });
    it('calls onChange with field name and value when the toggle is toggled', () => {
        const onChangeSpy = jest.fn();
        const props = {...defaultProps, onChange: onChangeSpy};
        render(<Toggle {...props} />);
        const input = screen.getByLabelText(defaultProps.toggle.label);
        expect(input).not.toBeChecked();
        userEvent.click(input);
        expect(onChangeSpy).toBeCalledWith(defaultProps.toggle.name, true);
    });
    // TODO add further tests for subToggle functionality
});

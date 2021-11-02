import { render, fireEvent, within, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';
import { DropdownItem } from './Dropdown.props';

describe('Dropdown Component', () => {
  let recepientList: DropdownItem[] = [];

  beforeEach(() => {
    recepientList = [{
      value: '8013-777-3232',
      label: 'Jason'
    }, {
      value: '4489-991-0023',
      label: 'Jane'
    }]
  });

  afterEach(() => {
    cleanup();
  });

  test('renders Dropdown with items', () => {
    // Arrange.
    const label = 'Recepient';
    const { container, getByRole } = render(<Dropdown label={label} items={recepientList} onChange={jest.fn} />);

    // Act.
    fireEvent.mouseDown(getByRole('button'));
    const listbox = within(getByRole('listbox'))
    fireEvent.click(listbox.getByText(/Jason/i));

    // Assert.
    expect(container.getElementsByClassName('MuiBox-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiFormControl-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiInputLabel-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiOutlinedInput-root').length).toBe(1);
    expect(container.getElementsByClassName('MuiSelect-select')[0].textContent).toEqual('Jason');

    // Act.
    fireEvent.mouseDown(getByRole('button'));
    const listbox1 = within(getByRole('listbox'))
    fireEvent.click(listbox1.getByText(/Jane/i));
    // Assert.
    expect(container.getElementsByClassName('MuiSelect-select')[0].textContent).toEqual('Jane');
  });
});

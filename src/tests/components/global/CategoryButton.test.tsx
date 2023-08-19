import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryButton, {
  CategoryButtonProps,
} from '../../../components/global/CategoryButton';

describe('CategoryButton Tests', () => {
  const categories: string[] = ['chair', 'table', 'lamp'];
  const filterItemsMock = jest.fn();

  const props: CategoryButtonProps = {
    categories,
    filterItems: filterItemsMock,
  };

  it('renders buttons with proper category names', () => {
    render(
      <MemoryRouter>
        <CategoryButton {...props} />
      </MemoryRouter>
    );

    categories.forEach((category) => {
      const categoryDisplayName = [
        'chair',
        'furniture',
        'lamp',
        'electronic',
      ].includes(category)
        ? category + 's'
        : category;
      expect(screen.getByText(categoryDisplayName)).toBeInTheDocument();
    });
  });

  it('calls filterItems with the correct category when a button is clicked', () => {
    render(
      <MemoryRouter>
        <CategoryButton {...props} />
      </MemoryRouter>
    );

    categories.forEach((category) => {
      const categoryDisplayName = [
        'chair',
        'furniture',
        'lamp',
        'electronic',
      ].includes(category)
        ? category + 's'
        : category;
      const button = screen.getByText(categoryDisplayName);
      fireEvent.click(button);
      expect(filterItemsMock).toHaveBeenCalledWith(category);
    });
  });

  it('renders correct Link to category', () => {
    render(
      <MemoryRouter>
        <CategoryButton {...props} />
      </MemoryRouter>
    );

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(categories.length);

    links.forEach((link, index) => {
      expect(link.getAttribute('href')).toEqual(`/${categories[index]}`);
    });
  });
});

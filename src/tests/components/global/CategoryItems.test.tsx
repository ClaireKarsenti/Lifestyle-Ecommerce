import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryItems, {
  CategoryItemsProps,
} from '../../../components/global/CategoryItems';
import { items } from '../../../utils/ProductsData';

describe('CategoryItems Tests', () => {
  const category = 'electronics';
  const filteredItems = items.filter((item) => item.category === category);

  const props: CategoryItemsProps = {
    category,
  };

  it('renders items with correct details and links', () => {
    render(
      <MemoryRouter>
        <CategoryItems {...props} />
      </MemoryRouter>
    );

    filteredItems.forEach((item) => {
      const descriptionElement = screen.getByText(item.description);
      const priceElement = screen.getByText(`${item.price}$`);
      const linkElement = descriptionElement.closest('a') as HTMLAnchorElement;

      expect(linkElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();

    });
  });

  it('scrolls to top when an item link is clicked', () => {
    const scrollToMock = jest.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock });

    render(
      <MemoryRouter>
        <CategoryItems {...props} />
      </MemoryRouter>
    );

    filteredItems.forEach((item) => {
      const descriptionElement = screen.getByText(item.description);
      const linkElement = descriptionElement.closest('a') as HTMLAnchorElement;

      fireEvent.click(linkElement);
      expect(scrollToMock).toHaveBeenCalledWith(0, 0);
    });
  });
});

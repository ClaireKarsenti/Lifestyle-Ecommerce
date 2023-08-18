import { useState, useEffect, useMemo } from 'react';
import StateController from './StateController';
import { items } from '../utils/ProductsData';

export type CategoriesHeaderControllerProps = {
  stateController: StateController<CategoriesHeaderControllerState>;
};

interface Item {
  id: number;
  category: string;
}

export type CategoriesHeaderControllerState = {
  btnName: string;
  productsArray: Item[];
};

export class CategoriesHeaderController {
  private _stateController: StateController<CategoriesHeaderControllerState>;

  constructor({ stateController }: CategoriesHeaderControllerProps) {
    this._stateController = stateController;
  }

  filterItems = (category: string) => {
    let updatedCategoryName = category;

    if (category === 'all') {
      this._stateController.updateState({ productsArray: items });
      this._stateController.updateState({ btnName: 'All' });
    } else {
      const newItems = items.filter((item: Item) => item.category === category);
      this._stateController.updateState({ productsArray: newItems });

      if (['chair', 'furniture', 'lamp', 'electronic'].includes(category)) {
        updatedCategoryName = category + 's';
      }
      this._stateController.updateState({ btnName: updatedCategoryName });
    }
  };
}

export default function useCategoriesHeaderController(): {
  state: CategoriesHeaderControllerState;
  controller: CategoriesHeaderController;
  allCategories: string[];
} {
  const [state, setState] = useState<CategoriesHeaderControllerState>({
    btnName: 'All',
    productsArray: items,
  });

  const stateController = useMemo(
    () =>
      new StateController<CategoriesHeaderControllerState>({
        state,
        setState,
      }),
    [state]
  );

  const controller = useMemo(
    () => new CategoriesHeaderController({ stateController }),
    [stateController]
  );

  const allCategories = [
    'all',
    ...Array.from(new Set(items.map((item: Item) => item.category))),
  ];

  return { state, controller, allCategories };
}

import { useState, useEffect, useMemo } from 'react';
import StateController from './StateController';

export type NavbarControllerProps = {
  stateController: StateController<NavbarControllerState>;
};

export type NavbarControllerState = {
  sticky: boolean;
  mobileNav: boolean;
  cart: boolean;
};

export class NavbarController {
  private _stateController: StateController<NavbarControllerState>;

  constructor({ stateController }: NavbarControllerProps) {
    this._stateController = stateController;
  }

  handleScroll = () => {
    if (window.scrollY > 10) {
      this._stateController.updateState({ sticky: true });
    } else {
      this._stateController.updateState({ sticky: false });
    }
  };

  openCart = () => {
    this._stateController.updateState({ cart: true });
  };

  closeCart = () => {
    this._stateController.updateState({ cart: false });
  };

  openNavMobile = () => {
    this._stateController.updateState({ mobileNav: true });
  };

  closeNavMobile = () => {
    this._stateController.updateState({ mobileNav: false });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
}

export default function useNavbarController(): {
  state: NavbarControllerState;
  controller: NavbarController;
} {
  const [state, setState] = useState<NavbarControllerState>({
    sticky: false,
    mobileNav: false,
    cart: false,
  });

  const stateController = useMemo(
    () =>
      new StateController<NavbarControllerState>({
        state,
        setState,
      }),
    [state]
  );

  const controller = useMemo(
    () => new NavbarController({ stateController }),
    [stateController]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        stateController.updateState({ sticky: true });
      } else {
        stateController.updateState({ sticky: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stateController]);

  return { state, controller };
}

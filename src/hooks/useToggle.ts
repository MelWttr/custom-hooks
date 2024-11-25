import { useReducer } from 'react';

interface State {
  value: string | boolean,
  index: number
}

interface Action {
  type: 'TOGGLE_ARRAY' | 'TOGGLE_BOOLEAN',
  payload?: Partial<State> 
}

interface ToggleReturnValue {
  value: string | boolean,
  toggle: (toggleValue?: string) => void
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_ARRAY':
      return {
        value: action.payload.value,
        index: action.payload.index,
      };
    case 'TOGGLE_BOOLEAN':
      return {
        ...state,
        value: typeof state.value === 'boolean' ? !state.value : state.value,
      };
    default:
      return state;
  }
};

export const useToggle = (values?: string[]): ToggleReturnValue => {
  const isArray = Array.isArray(values) && values.length > 0;
  const [state, dispatch] = useReducer(reducer, {
    value: isArray ? values[0] : false, // Если массив передан, начальное значение — первый элемент
    index: 0,
  });

  const toggle = (toggleValue: string | undefined) => {
    if (!isArray) {
      // Переключение булевого значения, если массив не передан
      dispatch({ type: 'TOGGLE_BOOLEAN' });
      return;
    }

    let newIndex: number = 0;
    if (typeof toggleValue === 'string') {
      const index = values.indexOf(toggleValue);
      newIndex = index === -1 ? state.index : index;
    } else {
      // Переход к следующему значению массива
      newIndex = (state.index + 1) % values.length;
    }

    dispatch({
      type: 'TOGGLE_ARRAY',
      payload: {
        value: values[newIndex],
        index: newIndex,
      },
    });
  };

  return { value: state.value, toggle };
};

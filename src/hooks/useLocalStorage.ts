import { useEffect, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

const getStorageItem = (key: string): LocalStorageReturnValue => {
    return JSON.parse(localStorage.getItem(key) ?? "null");
}

export const useLocalStorage: UseLocalStorage = (key: string) => {
    const [value, setValue] = useState<LocalStorageReturnValue>(() => getStorageItem(key));

    const setItem = (value: LocalStorageSetValue): void => {
        localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
    }

    const removeItem = (): void => {
        localStorage.removeItem(key);
        setValue(null);
    }

    return [value, {setItem, removeItem}];
}
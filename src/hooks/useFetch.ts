import { useEffect, useState } from 'react';

interface UseFetchState<T> {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
}

type FetchParams = Record<string, string | number>;

interface RefetchParams {
	params: FetchParams;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
	refetch: (params?: RefetchParams) => void;
}

const stringifyParams = (params: FetchParams): Record<string, string> => Object.fromEntries(
  Object.entries(params).map(([key, value]) => [key, String(value)])
);
const makeUrlWithSearchParams = (url: string | null, params: FetchParams): string => {
	return `${url}?${new URLSearchParams(stringifyParams(params)).toString()}`;
}

export const useFetch = <T = unknown>(url: string | null): UseFetchReturn<T> => {
	const [state, setState] = useState<UseFetchState<T>>({
		data: null,
		isLoading: false,
		error: null,
	});

	const fetchData = async (refParams?: RefetchParams) => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));
		const fetchUrl = refParams ? makeUrlWithSearchParams(url!, refParams.params) : url!;

		try {
			const response = await fetch(fetchUrl);
			if (!response.ok) {
				throw new Error('Error');
			}
			const data = await response.json();
			setState((prev) => ({
				...prev,
				isLoading: false,
				data,
			}));
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
				error,
			}));
		}
	};

	const refetch = (params: RefetchParams) => fetchData(params);

	useEffect(() => {
		if (url) {
			fetchData();
		}
	}, [url]);

	return { ...state, refetch };
};

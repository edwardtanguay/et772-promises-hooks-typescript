/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch<T>(url: string, mockWait = false) {
	const [items, setItems] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [timesItemsChanged, setTimesItemsChanged] = useState(0);
	const [error, setError] = useState("");

	useEffect(() => {
		if (timesItemsChanged === 0) {
			setTimesItemsChanged(1);
		} else {
			setIsLoading(false);
		}
	}, [items]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(url);
				const _items = response.data;
				if (mockWait) {
					setTimeout(
						() => {
							setItems(_items);
						},
						Math.floor(Math.random() * 2000) + 1000
					);
				} else {
					setItems(_items);
				}
			} catch (err: unknown) {
				setError((err as Error).message);
			}
		})();
	}, []);

	return { items, isLoading, hasError: error !== "", error };
}

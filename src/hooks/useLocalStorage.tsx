/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useLocalStorage = (idCode: string, initialValue = "") => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		const _value = localStorage.getItem(idCode);
		if (_value !== null) {
			setValue(_value);
		}
	}, []);

	const save = (value: string) => {
		setValue(value);
		localStorage.setItem(idCode, value);
	};

	return { value, save };
};

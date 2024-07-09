import { useState } from "react";

export const useToggle = (defaultValue: boolean = false): [boolean, () => void] => {
	const [value, setValue] = useState(defaultValue);

	const toggle = () => {
		setValue(!value);
	}
	
	return [value, toggle];
}
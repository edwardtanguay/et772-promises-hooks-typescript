export const TypeScriptOverloadedFunctionSignatures = () => {
	const displayNames = (names: string[]) => {
		return names.join(", ");
	};

	return (
		<>
			<h3>showing names</h3>
			<p>{displayNames(["Jonas", "Angela", "Robert"])}</p>
		</>
	);
};

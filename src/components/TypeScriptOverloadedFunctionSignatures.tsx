export const TypeScriptOverloadedFunctionSignatures = () => {
	const displayNames = (nameInfo: string | string[]) => {
		if (typeof nameInfo === "string") {
			return `Name: ${nameInfo}`;
		} else if (Array.isArray(nameInfo)) {
			return `Names: ${nameInfo.join(", ")}`;
		}
		throw new Error("Bad type");
	};
	
	return (
		<>
			<p>{displayNames("David")}</p>
			<p>{displayNames(["Jonas", "Angela", "Robert"])}</p>
		</>
	);
};

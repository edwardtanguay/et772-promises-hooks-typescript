export const TypeScriptOverloadedFunctionSignatures = () => {
	function displayNameInfo(name: string): string;
	function displayNameInfo(names: string[]): string;

	function displayNameInfo (nameInfo: string | string[]) {
		if (typeof nameInfo === "string") {
			return `Name: ${nameInfo}`;
		} else if (Array.isArray(nameInfo)) {
			return `Names: ${nameInfo.join(", ")}`;
		}
		throw new Error("Bad type");
	}

	return (
		<>
			<p>{displayNameInfo("David")}</p>
			<p>{displayNameInfo(["Jonas", "Angela", "Robert"])}</p>
		</>
	);
};

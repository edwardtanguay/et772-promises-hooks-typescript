import { TypeScriptConditionalTypes } from "../components/TypeScriptConditionalTypes";
import { TypeScriptOverloadedFunctionSignatures } from "../components/TypeScriptOverloadedFunctionSignatures";

export const PageTypeScript = () => {
	return (
		<>
			<h2 className="appMessage">
				These are some advanced TypeScript concepts.
			</h2>
			<h2 className="section">Overloaded Function Signatures</h2>
			<TypeScriptOverloadedFunctionSignatures />
			<h2 className="section mt-3">Conditional Types</h2>
			<TypeScriptConditionalTypes />
		</>
	);
};

export const PageAbout = () => {
	return (
		<>
			<p className="mb-1">
				This site is a collection of examples I made for a coding
				challenge, 2024-07-10.
			</p>
			<ul className="list-disc ml-6">
				<li>
					REPO:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://github.com/edwardtanguay/showcase-promises-hooks-typescript"
					>
						https://github.com/edwardtanguay/showcase-promises-hooks-typescript
					</a>
				</li>
				<li>
					NOTES:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://tanguay-eu.vercel.app/forays/313"
					>
					https://tanguay-eu.vercel.app/forays/313
					</a>
				</li>
			</ul>
			<p className="mb-1 mt-3">For more code examples, see my</p>
			<ul className="list-disc ml-6">
				<li>
					HOWTOS:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://tanguay-eu.vercel.app/howtos"
					>
						https://tanguay-eu.vercel.app/howtos
					</a>
				</li>
				<li>
					FORAYS:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://tanguay-eu.vercel.app/forays"
					>
						https://tanguay-eu.vercel.app/forays
					</a>
				</li>
				<li>
					TEMPLATES:{" "}
					<a
						className="underline"
						target="_blank"
						href="https://tanguay-eu.vercel.app"
					>
						https://tanguay-eu.vercel.app
					</a>
				</li>
			</ul>
		</>
	);
};

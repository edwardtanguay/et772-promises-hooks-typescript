export const PageAbout = () => {
	return (
		<>
			<p className="mb-3">
				This site is a collection of examples I made for a coding
				challenge, 2024-07-10.
			</p>
			<p className="mb-1">For more code examples, see my</p>
			<ul className="list-disc ml-6">
				<li>
					HOWTOS:{" "}
					<a
						className="underline"
						href="https://tanguay-eu.vercel.app/howtos"
					>
						https://tanguay-eu.vercel.app/howtos
					</a>
				</li>
				<li>
					FORAYS:{" "}
					<a
						className="underline"
						href="https://tanguay-eu.vercel.app/forays"
					>
						https://tanguay-eu.vercel.app/forays
					</a>
				</li>
				<li>
					TEMPLATES:{" "}
					<a
						className="underline"
						href="https://tanguay-eu.vercel.app"
					>
						https://tanguay-eu.vercel.app
					</a>
				</li>
			</ul>
		</>
	);
};

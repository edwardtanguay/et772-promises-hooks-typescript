import { useEffect, useState } from "react";
import { Skill } from "../types";
import * as tools from "../tools";

export const PageWelcome = () => {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		// get async data with callback
		tools.getSkills((response) => {
			if (typeof response === "string") {
				setMessage(response)
			} else {
				setSkills(response);
			}
		});
	}, []);

	useEffect(() => {
		// get async data with promise
	}, []);

	return (
		<>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<p>There are {skills.length} skills:</p>
		</>
	);
};

import { useEffect, useState } from "react";
import { Skill } from "../types";
import * as tools from "../tools";

export const PageWelcome = () => {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		// get async data with callback
		tools.getSkills((_skills) => {
			setSkills(_skills);
		});
	}, []);

	useEffect(() => {
		// get async data with promise
		
	}, []);

	return (
		<>
			<p>There are {skills.length} skills:</p>
		</>
	);
};





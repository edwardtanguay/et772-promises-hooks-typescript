import { useEffect, useState } from "react";
import { Skill } from "../types";
import * as tools from "../tools";

export const PageWelcome = () => {
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		const _skills = tools.getSkills();
		console.log(111, _skills);
		setSkills(_skills);
	}, []);
	return (
		<>
			<h2>There are {skills.length} skills:</h2>
		</>
	)
};

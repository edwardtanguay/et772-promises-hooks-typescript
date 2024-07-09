import { useEffect, useState } from "react";
import { Employee, Job, Skill } from "../types";
import * as tools from "../tools";
import { WaitUntilLoaded } from "../components/WaitUntilLoaded";

export const PagePromiseRace = () => {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [jobs, setJobs] = useState<Job[]>([]);
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [message, setMessage] = useState("");

	// CALLBACKS
	useEffect(() => {
		tools.getSkills((response) => {
			if (typeof response !== "string") {
				setSkills(response);
			} else {
				setMessage(`Error fetching skills: ${response}`);
			}
		});
	}, []);

	// PROMISES - AWAIT
	useEffect(() => {
		(async () => {
			try {
				const _jobs = await tools.getJobs();
				setJobs(_jobs);
			} catch (err: unknown) {
				setMessage(`Error fetching jobs: ${(err as Error).message}`);
			}
		})();
	}, []);

	// PROMISES - THEN
	useEffect(() => {
		tools
			.getEmployees()
			.then((_employees) => {
				setEmployees(_employees);
			})
			.catch((err: unknown) => {
				setMessage(
					`Error fetching employees: ${(err as Error).message}`
				);
			});
	}, []);

	return (
		<>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<p>RACE</p>
			<WaitUntilLoaded total={skills.length}>
				<p>There are {skills.length} skills.</p>
			</WaitUntilLoaded>
			<WaitUntilLoaded total={jobs.length}>
				<p>There are {jobs.length} jobs.</p>
			</WaitUntilLoaded>
			<WaitUntilLoaded total={employees.length}>
				<p>There are {employees.length} employees.</p>
			</WaitUntilLoaded>
		</>
	);
};




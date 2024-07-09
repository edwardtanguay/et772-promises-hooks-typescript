export type Skill = {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

export type Job = {
  id: number;
  title: string;
  company: string;
  url: string;
  description: string;
  skillList: string;
  publicationDate: string;
};

export type Employee = {
  employeeID: number;
  lastName: string;
  firstName: string;
};
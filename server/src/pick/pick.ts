interface School {
  totalNoStudents: number;
  haveLicense: boolean;
  totalNoTeachers: number;
}

//Pick
type Tutory = Pick<School, "totalNoStudents" | "totalNoTeachers">;

const uni: Tutory = {
  totalNoStudents: 5,
  totalNoTeachers: 10,
};

//partial
type OptionalSchool = Partial<School>;
const ghss: OptionalSchool = {
  haveLicense: true,
  totalNoStudents: 100,
};

console.log("ghss", ghss);

//readonly
interface Campus {
  salary: number;
  readonly apiKey: string; // this helps to make each property read only
}

const emp1: Campus = {
  apiKey: "sample",
  salary: 3000,
};
// emp1.apiKey = "sample 2"; // readonly

interface Park {
  sqfeet: number;
  place: string;
}

// make entire object is readonly
const technopark: Readonly<Park> = {
  sqfeet: 540000,
  place: "Trivandrum",
};

// technopark.sqfeet = 543333; // not work

// todo: Map and Record
// excllude
type Quality = "Good" | "Smoke" | "Excellent";

type BadQualities = Exclude<Quality, "Good" | "Excellent">;

const stud1: BadQualities = 'Smoke';

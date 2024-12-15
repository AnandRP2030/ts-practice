function printEvenNums(arr: number[]) {
  arr.forEach((num) => console.log(num));
}

printEvenNums([3, 4]);

// filter legal users
type Job = {
  jobType: string;
  salary: number;
  havePF: boolean;
};

let job1: Job = {
  jobType: "sales",
  salary: 3000,
  havePF: true,
};
let job2: Job = {
  jobType: "training",
  salary: 4000,
  havePF: false,
};

const printPfJobs = (jobs: Job[]) => {
  return jobs.filter((j) => j.havePF === true);
};

let arr: Job[] = [job1, job2];
console.log(printPfJobs(arr));

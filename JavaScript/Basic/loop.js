const students = [
  {
    name: "Menghouy",
    score: 88,
  },
  {
    name: "Pisey",
    score: 96,
  },
  {
    name: "Chetra",
    score: 80,
  },
  {
    name: "Udom",
    score: 95,
  }
]

let i = 0;
while(i < students.length){
  console.log(`Student: ${students[i].name} has ${students[i].score} score.`);
  i++;
}
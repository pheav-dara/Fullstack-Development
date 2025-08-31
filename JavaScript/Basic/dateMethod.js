// Date Object 
// day start from sunday first : sunday(0), monday(1),....

const khmerDays = [
  "អាទិត្យ",
  "ចន្ទ",
  "អង្គារ",
  "ពុធ",
  "ព្រហស្បិ៍",
  "សុក្រ",
  "សោរ៍"
 
]

const khmerMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


const date = new Date()

console.log(khmerDays[date.getDay()])
console.log(khmerMonths[date.getMonth()])
console.log(date.getFullYear())
console.log(`ថ្ងៃ${khmerDays[date.getDay()]} ទី${date.getDate()} ខែ​${khmerMonths[date.getMonth()]} ឆ្នាំ${date.getFullYear()}`)

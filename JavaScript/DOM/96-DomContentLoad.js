// DOMContentLoaded ដំណើរការបន្ទាប់ពី DOM Load រួចហើយប៉ុន្តែវារងចាំ External Source ដូចជា image stylesheet load រួចរាល់នោះទេ។
// load ដូចទៅនឹង DomContentloaded ដែរ ខុសត្រង់វាចាំទាល់តែ external source ដូចជា image ជាដើមធ្វើការ loard រួចរាល់សិន។

document.addEventListener("DOMContentLoaded", function(){
  const heading = document.querySelector("h1");
  console.log(heading)
})


window.addEventListener("load", function(){
  const img = document.querySelector("img");
  console.log(img)
})
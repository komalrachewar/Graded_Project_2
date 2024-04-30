let data;
( () => {
    fetch("assets/data.json")
    .then(res => res.json())
    .then(json => {
        // Do whatever you want
        console.log(json.resume);
        data = json.resume
        // return json.resume;    
        return;
    });
} )();

const searchBox = document.querySelector("#searchBox");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

prevBtn.addEventListener("click", handleNextBtn);
nextBtn.addEventListener("click", handlePrevBtn);

searchBox.addEventListener("onkeypress", searchResume);
console.log(data.filter((e) => e.skills.includes("web Development")));
function searchResume(e) {
    if(e.key === "enter") {
        data = data.filter((e) => e.skills.includes(searchBox.value));
    } else {

    }
}







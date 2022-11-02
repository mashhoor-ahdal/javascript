 
 let counter =document.getElementById("count");
 let saveEle = document.getElementById("prev");

 let counts =0;
function increase() {
    counts =counts + 1;
    counter.innerText = counts;
   
}

function save() {
    let countStr=counts + " - "
    saveEle.innerText += countStr ;
  }




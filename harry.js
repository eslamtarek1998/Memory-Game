document.querySelector(".control-buttons span").onclick=function(){
    let name=prompt("whats your name?")

    if(name==""){
        document.querySelector(".name span").innerHTML="unknown"
        
    }

    else{
        document.querySelector(".name span").innerHTML=name
    }

    document.querySelector(".control-buttons").remove()


}

// //////////////////////////

let duration=1000;

let memory=document.querySelector(".memory-game")
let blocks=Array.from(memory.children)
let orderRange=[...Array(blocks.length).keys()]


shuffle(orderRange)


function shuffle(array) {

    let current = array.length,
          temp,
          random;
    
      while (current > 0) {
    
        // Get Random Number
        random = Math.floor(Math.random() * current);
    
        // Decrease Length By One
        current--;
    
        // [1] Save Current Element in Stash
        temp = array[current];
    
        // [2] Current Element = Random Element
        array[current] = array[random];
    
        // [3] Random Element = Get Element From Stash
        array[random] = temp;
    
      }
      return array;
    }




    
   
   
    // console.log(orderRange)
    // console.log(orderRange) deh lwo 3yz tshof elindex btt8yr kol shwya 
    // let orderRange=Array.from(Array(blocks.length).keys()) 
    // let testOrderRange=[13,0,12,2,1,10,8,19,17,3,9,4,14,5,11,16,7,18,6,15]







blocks.forEach((block,index)=>{
    block.style.order=orderRange[index]

    block.addEventListener('click', function () {

        
        flipBlock(block);
        
    
      })
})




function flipBlock(selectedBlock) {

    selectedBlock.classList.add('is-flipped');
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    if (allFlippedBlocks.length === 2) {


        stopClicking();

        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])

    }
}



function stopClicking(){
    memory.classList.add('no-clicking')

    setTimeout(() => {

        
        memory.classList.remove('no-clicking');
    
      }, duration)
}


function checkMatchedBlocks(firstBlock, secondBlock){

    let triesElement = document.querySelector('.spann')
    

    if (firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped')
        secondBlock.classList.remove('is-flipped')

        firstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')
    }

    else {

        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {

            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
      
          }, duration)

         }


}






// ///////////////////////////







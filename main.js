

let gridItem = document.querySelectorAll(".column p")
let reset = document.querySelector(".reset")
let turn = document.querySelector(".turn")
let resetXO = document.querySelector(".reset-x-o")
let x = document.querySelector(".x")
let o = document.querySelector(".o")
let alert = document.getElementById("desc")
let curentTurn = "X"
let gameIsFanish = false
let howMineWinnerX = 0
let howMineWinnerO = 0 
let Array = ["1","2","3","4","5","6","7","8","9"]

// loop on elements 
for(let ele of gridItem){
    ele.addEventListener("click",()=>{
        let AttributeValue = ele.getAttribute("value")
// loop on Array
        for(arr of Array){
            if (gameIsFanish) {
                return
            }

            if (AttributeValue == arr) {
                if(ele.innerHTML != ""){
                    return
                }else{

                    Array[AttributeValue -1] = curentTurn
                    ele.innerHTML = curentTurn
                    if (curentTurn == "X") {
                        curentTurn = "O"
                    }else{
                        curentTurn = "X"  
                    }
                    WhoWinner() 
                    turn.innerHTML = `${curentTurn} Turn`
                }
            }
        }
    })
}


let WhoWinner = ()=>{
    if(
        // row 
        (Array[0] == Array[1] && Array[1] == Array[2]) ||

        (Array[3] == Array[4] && Array[4] == Array[5]) ||

        (Array[6] == Array[7] && Array[7] == Array[8]) ||
        // row
        // column
        (Array[0] == Array[3] && Array[3] == Array[6]) ||
        (Array[1] == Array[4] && Array[4] == Array[7]) ||
        (Array[2] == Array[5] && Array[5] == Array[8]) ||
        // column
        
        (Array[0] == Array[4] && Array[4] == Array[8]) ||
        (Array[2] == Array[4] && Array[4] == Array[8]) 

        
        ){
            // who winner 
        let winner = curentTurn == "O" ? "X" : "O"
        // show winner
        alert.innerHTML = `${winner} winner`
        launch_toast()
        gameIsFanish = true
        if (gameIsFanish == true && winner == "X") {
            // how mine winner x
            howMineWinnerX ++
            x.innerHTML = `X | ${howMineWinnerX}`

        }else {
            // how mine winner x
            howMineWinnerO ++
            o.innerHTML = `O | ${howMineWinnerO}`
        }   

    }else{
        let isDrow = true
    for(squar of Array){
        if (squar != "X" && squar != "O") {
            isDrow =false
        }
    }
    
    if (isDrow) {
        gameIsFanish = true
        alert.innerHTML =  `balanced`
        launch_toast()
    }
    }

    // let isDrow = true
    // for(squar of Array){
    //     if (squar != "X" && squar != "O") {
    //         isDrow =false
    //     }
    // }
    
    // if (isDrow) {
    //     gameIsFanish = true
    //     alert.innerHTML =  `balanced`
    //     launch_toast()
    // }
}


reset.addEventListener("click",()=>{
    resetElements()
})

let resetElements = ()=>{
    for(ele of gridItem){
        ele.innerHTML = ""
        Array = ["1","2","3","4","5","6","7","8","9"]
    }
    gameIsFanish = false
    curentTurn = "X"
    turn.innerHTML = `${curentTurn} Turn`
}

resetXO.addEventListener("click",()=>{
    o.innerHTML = `O | 0`
    x.innerHTML = `X | 0`
    howMineWinnerO = 0
    howMineWinnerX = 0
    resetElements()
})

// alert
function launch_toast() {
    let  x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
// alert

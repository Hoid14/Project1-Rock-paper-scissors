let getComputerChoice=()=>{
    aleatorio=Math.floor(Math.random()*3)
    let eleccion
    if (aleatorio===1){
        eleccion="rock"
    }
    else if(aleatorio===2){
        eleccion="paper"
    }
    else{
        eleccion="scissors"
    }
    return eleccion
}

let playRound=(playerSelection,computerSelection)=>{
    if (playerSelection===computerSelection){
        return ["tied round"]
    }
    else if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            return [`You Lose! ${computerSelection} beats ${playerSelection}`,"maquina"]
        }
        else if(computerSelection==="scissors"){
            return [`You Won! ${playerSelection} beats ${computerSelection}`,"jugador"]
        }
    }
    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            return [`You Won! ${playerSelection} beats ${computerSelection}`,"jugador"]
        }
        else if(computerSelection==="scissors"){
            return [`You Lose! ${computerSelection} beats ${playerSelection}`,"maquina"]
        }
    }
    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            return [`You Lose! ${computerSelection} beats ${playerSelection}`,"maquina"]
        }
        else if(computerSelection==="paper"){
            return [`You Won! ${playerSelection} beats ${computerSelection}`,"jugador"]
        }
    }
}

let game=()=>{
    puntos_jugador=0
    puntos_maquina=0
    conteo_ronda=1
    while(puntos_jugador<5 && puntos_maquina<5){
        console.log(`Round ${conteo_ronda}`)
        console.log(`Player ${puntos_jugador} Machine ${puntos_maquina}`)
        computerSelection=getComputerChoice()
        playerSelection=prompt("Choose \"rock\", \"paper\" or \"scissors\"")
        playerSelection=playerSelection.toLowerCase()
        ronda=playRound(playerSelection,computerSelection)

        if(ronda[1]==="jugador") puntos_jugador+=1
        else if(ronda[1]==="maquina")puntos_maquina+=1
        console.log(ronda[0])
        conteo_ronda+=1
    }
    console.log(`Round ${conteo_ronda}`)
    console.log(`Player ${puntos_jugador} Machine ${puntos_maquina}`)
    if (puntos_jugador===5)console.log("Player win game!")
    else if(puntos_maquina===5)console.log("Machine win game!")
}

game()



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
        return ["tied round", "empate"]
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

const btns=document.querySelectorAll("#btn");
const displayResult=document.querySelector("#result");





let game=()=>{
    puntos_jugador=0
    puntos_maquina=0
    conteo_ronda=1
    
   
    btns.forEach((btn)=>{
        btn.addEventListener("click", (e) => {
            result= playRound(e.target.textContent,getComputerChoice())
            if (result[1]==="jugador"){
                puntos_jugador+=1
            }
            else if(result[1]==="maquina"){
                puntos_maquina+=1
            }
            displayResult.innerHTML=`
            Round ${conteo_ronda}: 
            <br/>${result[0]}
            <br/>Current Score:
            <br/>Player: ${puntos_jugador} points
            <br/>Machine: ${puntos_maquina} points`
            conteo_ronda+=1
            if (puntos_jugador===5 || puntos_maquina){
                if (puntos_jugador===5){
                    displayResult.textContent=`Ganaste!`
                    puntos_jugador=0
                    puntos_maquina=0
                    conteo_ronda=1
                }
                else if(puntos_maquina===5){
                    displayResult.textContent=`Perdiste!`
                    puntos_jugador=0
                    puntos_maquina=0
                    conteo_ronda=1
                }
            }
        })
    })
    
    
}


game()



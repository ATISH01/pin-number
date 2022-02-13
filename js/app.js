function getPin(){
    const randomNumber = Math.round(Math.random()*10000);
    const getRandomNumber = document.getElementById('random-field').value;
    const randomNumberStr = randomNumber + '';
    if(randomNumberStr.length == 4){
        document.getElementById('random-field').value = randomNumber; 
    }
    else{
        return getPin()
    }
}

function pinGenerate(){
    getPin()
}
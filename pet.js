// class constructor

class Pet {
    constructor(name, tiredness = 5, hunger = 5, boredness = 5, education = 0, health = 30, stress = 0) {
        this.name = name;
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.boredness = boredness;
        this.education = education;
        this.health = health;
        this.stress = stress;
    }
    sleep(){
        this.tiredness--,
        displayedText.textContent = 'Tiredness reduced by 1';
        
    }
    feed(){
        this.hunger--;
        displayedText.textContent = 'Hunger reduced by 1';
    }
    play(){
        this.boredness--,
        displayedText.textContent = 'Boredness reduced by 1';
    }
    educate(){
        this.education++,
        this.boredness++,
        this.hunger++,
        this.tiredness++;
        displayedText.textContent = `Education increased by 1! ${this.name} is more tired, bored and hungry than before!`;
    }
    healthCheck(){
        const distress = (this.health - this.stress)
        healthDisplay.textContent = `+${distress}`;
        if (this.health <= this.stress) {
            screen.id='gameover';
            displayedText.textContent = 'GAME OVER';
            healthDisplay.textContent ='';
        }
        
    }
    stressCalc(){
        this.stress = (this.tiredness + this.hunger + this.boredness); //needed separate from health
    }
    status(){
        console.log(`${this.name}'s tiredness is ${this.tiredness} , hunger is ${this.hunger} lonelines is ${this.boredness}`)
        if (this.tiredness >= 5 && this.hunger >= 5  && this.boredness >= 5) {
            displayedText.textContent =`${this.name} is really tired, really hungry and really lonely!!`;

        }else if(this.tiredness > 3 && this.hunger > 3 && this.boredness > 3){
            displayedText.textContent =`${this.name} is somewhat tired, somewhat hungry and somewhat lonely`;

        }else if(this.tiredness < 3 && this.hunger < 3 && this.boredness < 3){
            displayedText.textContent =`${this.name} is well taken care of!!`;

        }else if(this.tiredness > 3 && this.hunger < 3 && this.boredness < 3){
            displayedText.textContent =`${this.name} is tired!!`;
        }else if(this.tiredness < 3 && this.hunger > 3 && this.boredness < 3){
            displayedText.textContent =`${this.name} is hungry!!`;
        }else if(this.tiredness < 3 && this.hunger < 3 && this.boredness > 3){
            displayedText.textContent =`${this.name} is lonely!`;
        }
        
    }
};



// -----------------------DOM---------------

//selectors
const feedBtn = document.querySelector('.button__left');
const sleepBtn = document.querySelector('.button__center');
const playBtn = document.querySelector('.button__right');
const statusBtn = document.querySelector('.button__leftside');
const educateBtn = document.querySelector('.button__rightside');
const screen = document.querySelector('.healthbar__container');
const displayedText = document.querySelector('#displayedText');
const healthMeter = document.querySelector('#health-meter-hidden');
const healthDisplay = document.querySelector('.health');


//Play listeners
feedBtn.addEventListener('click', e =>{
    tamagotchi.feed();
    tamagotchi.stressCalc() //everytime calc stress and health after every action
    tamagotchi.healthCheck();

})
sleepBtn.addEventListener('click', e =>{
    tamagotchi.sleep();
    tamagotchi.stressCalc()
    tamagotchi.healthCheck();
})
playBtn.addEventListener('click', e =>{
    tamagotchi.play();
    tamagotchi.stressCalc()
    tamagotchi.healthCheck();
})
statusBtn.addEventListener('click', e =>{
    tamagotchi.status();
    tamagotchi.stressCalc()
    tamagotchi.healthCheck();
    
})
educateBtn.addEventListener('click', e =>{
    tamagotchi.educate();
    tamagotchi.stressCalc()
    tamagotchi.healthCheck();
})

// creating pet
let tamagotchi
const inputEntry = document.querySelector('#input');

inputEntry.addEventListener('keydown', (e) =>{
    // 
    if(e.key === 'Enter'){
        tamagotchi = new Pet(inputEntry.value);
        const formObj = document.querySelector('#form');
        formObj.removeChild(inputEntry);
        healthMeter.id='health-meter';
        tamagotchi.stressCalc(); //starting stress calc 
        tamagotchi.healthCheck(); //displaying health
    }
})

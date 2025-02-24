class Question {
    // YOUR CODE HERE:
    //
    constructor (text, choices, answer, difficulty) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.difficulty = difficulty;
    }
    
    shuffleChoices(){   
        console.log(this.choices)
        for (let i = this.choices.length -1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [this.choices[i], this.choices[randomIndex]] = [this.choices[randomIndex], this.choices[i]];
       }
       console.log(this.choices);
       return this.choices;
    }
}
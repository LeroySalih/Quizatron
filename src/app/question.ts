import { v4 as uuid } from 'uuid'

export class Answer {
    
    constructor(private correctValue:number, 
                private label:string){

    }

    checkAnswer(input:string) : boolean {
         return false;   
    }
}

export class Question {
    
    constructor (public id:string,
                 public questionText:string,
                 private answers:Answer[]){

    } 
    checkAnswer(input:string[]) : boolean {
        return false 
    }

    static randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    static createRandomFraction () : Question {
        var num1:number = this.randomIntFromInterval(1,5);
        var num2:number = this.randomIntFromInterval(1,5);
        var num3:number = this.randomIntFromInterval(1,5);
        var num4:number = this.randomIntFromInterval(1,5);
        
        var questionText:string  = `\\dfrac{${num1}}{${num2}} + \\dfrac{${num3}}{${num4}} = \\dfrac{a}{b}`
        var answers = [new Answer(1, 'numerator'), new Answer(2, 'denominator')]
        
        return new Question(uuid(), questionText, answers)
    }
}

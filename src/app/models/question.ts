import { v4 as uuid } from 'uuid'
import * as math from 'mathjs'

export class Answer {
    
    constructor(private correctValue:number, 
                private label:string){

    }

    checkAnswer(input:number) : boolean {
         return (input == this.correctValue);   
    }
}

export class Question {
    
    constructor (public id:string,
                 public questionText:string,
                 private answers:Answer[]){

    } 
    checkAnswer(number1:number, number2:number) : boolean {
        return this.answers[0].checkAnswer(number1) && this.answers[1].checkAnswer(number2)
         
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
        
        var result = math.add( math.fraction(num1,num2), math.fraction(num3,num4))

        var answers = [new Answer(result['n'], 'numerator'), new Answer(result['d'], 'denominator')]
        
        return new Question(uuid(), questionText, answers)
    }
}

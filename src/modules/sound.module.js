import { Module } from "@/core/module";
import {random} from "@/utils";

export class SoundModule extends Module {
    constructor(){
        super('sounds', 'случайный звук')
    }
    trigger() {
        
            const ourSound= new Audio
            ourSound.src = `..assets/sounds_short/${random(1,14)}.wav`
            ourSound.setAttribute('autoplay', true) 
            ourSound.setAttribute('controls', true) 
           document.body.append(ourSound)
            console.log('sounds')   
        
    }
}
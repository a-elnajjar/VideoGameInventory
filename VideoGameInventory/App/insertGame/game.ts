module app.domain {
    'use strict';
    export interface IGame {
        recoredId: number;
        name: string;
        publisher: string;
        developer: Date;
        walkthroughURL: string;
        description: string;
        imageUrl: string;

        
    }

    export class Game implements IGame {

        constructor(public  recoredId: number,
            public name: string,
            public publisher: string,
            public developer: Date,
            public walkthroughURL: string,
            public description: string,
            public imageUrl: string){}
    }
}
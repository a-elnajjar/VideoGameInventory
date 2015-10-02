module app.domain
{
    'use strict';

    export interface IGame
    {
        recoredId: number;
        name: string;
        publisher: string;
        developer: string;
        walkthroughURL: string;
        description: string;
        imageUrl: string;
        createdBy: string;
        createdOn: Date;
        modifiedBy: string;
        modifiedOn: Date;
    }

    export class Game implements IGame
    {
        constructor(public recoredId: number,
            public name: string,
            public publisher: string,
            public developer: string,
            public walkthroughURL: string,
            public description: string,
            public imageUrl: string,
            public createdBy: string,
            public createdOn: Date,
            public modifiedBy: string,
            public modifiedOn: Date) {}
    }
}
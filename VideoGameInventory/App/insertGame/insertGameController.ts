module app.insertGame
{
    interface IGameModel
    {
        title: string;
        game: domain.IGame;
        insertGame(): void;
    }


    class InsertGameController implements IGameModel
    {
        title: string;
        game: domain.IGame;
        static $inject = [];

        insertGame(): void
        {
        }
    }

    angular
        .module('app')
        .controller('InsertGameController',
            InsertGameController);
}
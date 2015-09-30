module app.insertGame {
    interface IGameModel {
        title: string;
        game: app.domain.IGame;
        insertGame(): void;       
    }


    class InsertGameController implements IGameModel {
        title: string;
        game: app.domain.IGame;
        static $inject = ["dataAccessService"];

        insertGame(): void {
            
        }
    }

    angular
        .module("app")
        .controller("InsertGameController",
        InsertGameController);
}
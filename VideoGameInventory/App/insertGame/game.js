var app;
(function (app) {
    var domain;
    (function (domain) {
        'use strict';
        var Game = (function () {
            function Game(recoredId, name, publisher, developer, walkthroughURL, description, imageUrl, createdBy, createdOn, modifiedBy, modifiedOn) {
                this.recoredId = recoredId;
                this.name = name;
                this.publisher = publisher;
                this.developer = developer;
                this.walkthroughURL = walkthroughURL;
                this.description = description;
                this.imageUrl = imageUrl;
                this.createdBy = createdBy;
                this.createdOn = createdOn;
                this.modifiedBy = modifiedBy;
                this.modifiedOn = modifiedOn;
            }
            return Game;
        })();
        domain.Game = Game;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=game.js.map
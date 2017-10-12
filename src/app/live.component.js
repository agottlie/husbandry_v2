"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var show_service_1 = require("./show.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var LiveComponent = (function () {
    function LiveComponent(showService, router) {
        this.showService = showService;
        this.router = router;
    }
    LiveComponent.prototype.getPastShows = function () {
        var _this = this;
        this.showService.getPastShows().then(function (pastShows) {
            _this.pastShows = pastShows;
            for (var i = 0; i < _this.pastShows.length; i++) {
                _this.pastShows[i].tourdate = _this.pastShows[i].tourdate.substr(5, 2) + "." + _this.pastShows[i].tourdate.substr(8, 2) + "." + _this.pastShows[i].tourdate.substr(2, 2);
            }
        });
    };
    LiveComponent.prototype.getFutureShows = function () {
        var _this = this;
        this.showService.getFutureShows().then(function (futureShows) {
            _this.futureShows = futureShows;
            for (var i = 0; i < _this.futureShows.length; i++) {
                _this.futureShows[i].tourdate = _this.futureShows[i].tourdate.substr(5, 2) + "." + _this.futureShows[i].tourdate.substr(8, 2) + "." + _this.futureShows[i].tourdate.substr(2, 2);
            }
        });
    };
    LiveComponent.prototype.ngOnInit = function () {
        $('.showsWidget').hide();
        this.getPastShows();
        this.getFutureShows();
    };
    return LiveComponent;
}());
LiveComponent = __decorate([
    core_1.Component({
        selector: 'live',
        templateUrl: './live.component.html'
    }),
    __metadata("design:paramtypes", [show_service_1.ShowService,
        router_1.Router])
], LiveComponent);
exports.LiveComponent = LiveComponent;
//# sourceMappingURL=live.component.js.map
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
var AppComponent = (function () {
    function AppComponent(showService, router) {
        this.showService = showService;
        this.router = router;
    }
    AppComponent.prototype.get6Shows = function () {
        var _this = this;
        this.showService.get6Shows().then(function (sixShows) {
            _this.sixShows = sixShows;
            for (var i = 0; i < _this.sixShows.length; i++) {
                _this.sixShows[i].tourdate = _this.sixShows[i].tourdate.substr(5, 2) + "." + _this.sixShows[i].tourdate.substr(8, 2) + "." + _this.sixShows[i].tourdate.substr(2, 2);
            }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.get6Shows();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [show_service_1.ShowService,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
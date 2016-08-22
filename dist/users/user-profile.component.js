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
var core_1 = require('@angular/core');
var user_1 = require('../shared/models/user');
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserProfileComponent.prototype, "user", void 0);
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            template: "\n    <div class=\"jumbotron\" *ngIf=\"user\">\n      <h2>{{ user.name }} <small>{{ user.username }}</small></h2>\n\n      <input class=\"form-control\" [(ngModel)]=\"user.name\">\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map
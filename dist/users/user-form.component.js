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
var UserFormComponent = (function () {
    function UserFormComponent() {
    }
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'user-form',
            styles: ["\n    form   {\n      padding: 10px;\n      background: #ECF0F1;\n      border-radius: 3px;\n    }\n  "],
            template: "\n    <form>\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"name\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" required>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\">\n        Create User\n      </button>\n\n    </form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map
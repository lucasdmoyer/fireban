"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SeoService = void 0;
var core_1 = require("@angular/core");
var SeoService = /** @class */ (function () {
    function SeoService(title, meta, router) {
        this.title = title;
        this.meta = meta;
        this.router = router;
    }
    // takes an object and returns the actual data from firestore
    SeoService.prototype.generateTags = function (_a) {
        var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.description, description = _c === void 0 ? '' : _c, _d = _a.image, image = _d === void 0 ? '' : _d;
        this.title.setTitle(title);
        this.meta.addTags([
            // Open Graph
            { name: 'og:url', content: "https://firestarter.fireship.io" + this.router.url },
            { name: 'og:title', content: title },
            { name: 'og:description', content: description },
            { name: 'og:image', content: image },
            // Twitter Card
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@fireship_dev' },
        ]);
    };
    SeoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SeoService);
    return SeoService;
}());
exports.SeoService = SeoService;

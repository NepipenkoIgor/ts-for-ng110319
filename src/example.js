"use strict";
// Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var xObj = {
    x: 10,
};
xObj.x = 2;
var SuperPoint = /** @class */ (function () {
    function SuperPoint() {
        this.y = 10;
    }
    SuperPoint.prototype.chartName = function () {
        return 'My Chart';
    };
    return SuperPoint;
}());
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Point.prototype.sum = function () {
        return this.y * 10;
    };
    return Point;
}(SuperPoint));
var CustomPoint = /** @class */ (function (_super) {
    __extends(CustomPoint, _super);
    function CustomPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomPoint.prototype.sum = function () {
        return this.y * 2;
    };
    return CustomPoint;
}(SuperPoint));
var point = new Point(1, 2, 3);
// class CustomPoint extends Point {
//     public constructor() {
//         super();
//     }
// }
// class Singleton {
//     private static _instance: Singleton;
//     private constructor() {
//     }
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
// let instance = Singleton.getInstance();
// type, class;
function a(_a) {
}
var user;
var user1;

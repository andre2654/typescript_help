"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: "André",
        email: "andre.victor29@hotmail.com",
        password: "Teste",
        techs: ["Node", "ts", "JS", { title: "java", experience: 100 }, { title: "C++", experience: 50 }]
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;

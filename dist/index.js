"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = greet;
function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}

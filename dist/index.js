"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoSchema = void 0;
exports.greet = greet;
function greet(person) {
    return "Hello, ".concat(person.name, "! You are ").concat(person.age, " years old.");
}
var MongoSchema = /** @class */ (function () {
    function MongoSchema(mongoose) {
        this.mongoose = mongoose;
    }
    Object.defineProperty(MongoSchema.prototype, "userSchema", {
        get: function () {
            return new this.mongoose.Schema({
                name: {
                    type: String,
                },
            });
        },
        enumerable: false,
        configurable: true
    });
    return MongoSchema;
}());
exports.MongoSchema = MongoSchema;

// src/index.ts

export function greet(person: MyInterface): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

import { MyInterface } from "./interface/app";

export class MongoSchema {
  private mongoose: any;

  constructor(mongoose: any) {
    this.mongoose = mongoose;
  }

  get userSchema() {
    return new this.mongoose.Schema({
      name: {
        type: String,
      },
    });
  }
}

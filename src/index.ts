// src/index.ts

export interface MyInterface {
  name: string;
  age: number;
}

export function greet(person: MyInterface): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

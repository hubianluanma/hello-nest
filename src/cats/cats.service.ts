import { Injectable } from "@nestjs/common";
import { Cat } from "./interface/cat.interface";

@Injectable()
export class CatsService {

    private readonly cats: Cat[] = [];

    create(cat: Cat): void {
        this.cats.push(cat);
    }

    findAll(name: string, age: number, breed: string): Cat[] {
        console.log(`find all cats with name: ${name} and age is: ${age} and breed is: ${breed}\n`);
        return this.cats;
    }
}
import { Injectable } from "@nestjs/common";

@Injectable()
export class CatsService {

    findAll(name: string, age: number, breed: string): string {
        return `find all cats with name: ${name} and age is: ${age} and breed is: ${breed}\n`;
    }
}
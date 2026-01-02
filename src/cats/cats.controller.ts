import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./create-cat.dto";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

  @Post()
  createCats(@Body() createCatDto: CreateCatDto): string {
    return "This action adds a new cat with name: " + createCatDto.name + " and age: " + createCatDto.age + " and breed: " + createCatDto.breed + "\n";
  }

  @Get()
  findAll(@Query('name') name: string, @Query('age') age: number, @Query('breed') breed: string): string {
    return this.catsService.findAll(name, age, breed);
  }

}
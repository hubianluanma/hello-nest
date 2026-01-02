import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interface/cat.interface";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

  @Post()
  createCats(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(@Query('name') name: string, @Query('age') age: number, @Query('breed') breed: string): Promise<Cat[]> {
    return this.catsService.findAll(name, age, breed);
  }

}
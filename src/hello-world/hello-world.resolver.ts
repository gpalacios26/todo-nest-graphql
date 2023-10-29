import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, { name: 'hello', description: 'Retorna Hola Mundo' })
    getHelloWorld(): string {
        return 'Hola Mundo';
    }

    @Query(() => Float, { name: 'randomNumber', description: 'Retorna un número aleatorio desde 0-99' })
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { name: 'randomFromZeroTo', description: 'Retorna un número aleatorio desde 0-99 -> el valor ingresado es el nuevo límite' })
    getRandomFromZeroTo(@Args('to', { type: () => Int, nullable: true }) to: number = 100): number {
        return Math.floor(Math.random() * to);
    }
}

import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { CommandHandlers } from './commands/handlers'
import { EventHandlers } from './events/handlers'
import { HeroesController } from './heroes.controller'
import { QueryHandlers } from './queries/handlers'
import { HeroRepository } from './repositories/hero.repository'
import { HeroesGameSagas } from './sagas/heroes.sagas'

@Module({
  imports: [CqrsModule],
  controllers: [HeroesController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesModule {}

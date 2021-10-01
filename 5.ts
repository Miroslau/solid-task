//В данном коде происходит нарушение Dependency Inversion принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type User = {
  id: number;
  name: string;
};

interface ILogger {
  log(user: User): void;
}

interface ISubscribe {
  subscribe(user: User): void;
}

class LoggerService implements ILogger{
  public log(user: User): void {
    console.log(user.name);
  }
}

class SubscriptionService implements ISubscribe{
  public subscribe(user: User): void {
    console.log(`${user.name} is subscribed`);
  }
}

class AppService {

  constructor(
      private logging: ILogger,
      private subscription: ISubscribe
  ) {
    this.logging = logging
    this.subscription = subscription
  }

  public create(userInfo: User): void {
    this.logging.log(userInfo);
    this.subscription.subscribe(userInfo);
  }
}

const resultService = new AppService(new LoggerService(), new SubscriptionService())
console.log(resultService.create({id: 1, name: 'Test'}))
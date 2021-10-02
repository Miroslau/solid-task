//В данном коде происходит нарушение Open-closed принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type OrderView = {};
type Order = {};

interface ISend {
  send(order: Order): OrderView
}

class MailServer implements ISend{
  public send(order: Order): OrderView {
    return {} as OrderView;
  }
}

class OrderPresenter implements ISend{
  public send(order: Order): OrderView {
    return {} as OrderView;
  }
}

class OrderSystem {
  private sendMessage: ISend
  constructor(sendMessage: ISend) {
    this.sendMessage = sendMessage
  }

  public createOrder(): OrderView {
    const order = {} as Order;
    const orderView = this.sendMessage.send(order);
    return orderView as OrderView;
  }
}

const myMailSystems = new OrderSystem(new MailServer())
console.log(myMailSystems.createOrder())
const myOrderPresenter = new OrderSystem(new OrderPresenter())
console.log(myOrderPresenter.createOrder())
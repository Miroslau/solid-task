//В данном коде происходит нарушение Single-responsibility принципа
//Исправьте следующий код так, чтобы данный принцип соблюдался, сохранив исходную функциональность кода.

type Data = {
  id: number;
  description: string;
};

class Info {
  id: number
  description: string
  constructor(data: Data) {
    this.id = data.id
    this.description = data.description
  }
  getInfo(): string{
    return `info: ${this.id} ${this.description}`
  }
}

class Statistics {
  public computeStatistics(data: Data[]): number {
    return data.length
  }
}

class Report {
  public computeReport(data: Data[]): string[] {
    return data.map(({description}) => description)
  }
}

const infoOne = new Info({
  id: 1,
  description: 'MMMM'
})

const myStatistics = new Statistics()
const myReport = new Report()

const statistics: Array<Data> = [
  {
    id: 1,
    description: '123'
  },
  {
    id: 2,
    description: '333'
  },
  {
    id: 3,
    description: '678'
  },
]

console.log(infoOne.getInfo())
console.log(myStatistics.computeStatistics(statistics))
console.log(myReport.computeReport(statistics))
class Coda<T> {
  private items: T[] = [];

  aggiungi(item: T): void {
    this.items.push(item);
  }

  togli(): T | undefined {
    return this.items.shift();
  }

  dimensione(): number {
    return this.items.length;
  }
}

const numberQueue = new Coda<number>();
numberQueue.aggiungi(10);
numberQueue.aggiungi(20);
numberQueue.aggiungi(30);
console.log(numberQueue.togli());
console.log(numberQueue.dimensione());

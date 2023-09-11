export class ByteInteger {

  minLimit: number = 0;
  maxLimit: number = 255;

  value: number;

  constructor(value: number) {
    this.value = value;
  }

  increment() {
    this.value = (this.value < this.maxLimit) ? this.value + 1 : this.minLimit;
  }

  decrement() {
    this.value = (this.value > this.minLimit) ? this.value - 1 : this.maxLimit;
  }

  showCharacter() {
    const character: string = String.fromCharCode(this.value);
    console.log('***\ncharacter: ' + character);
    console.log('this.value: ' + this.value);
    return character;
  }

}

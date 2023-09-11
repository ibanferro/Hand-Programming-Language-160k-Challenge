export class HplInstruction {

  instructions: string;

  constructor( instructions: string ) {
    this.instructions = instructions;
  }

  execute() {
    console.log("HplInstruction.execute()");
  }
}

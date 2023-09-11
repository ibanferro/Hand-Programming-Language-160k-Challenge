import { ByteInteger } from "../byte-integer";

export class Decrement {
  constructor()
  {

  }

  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    memoryArray[ memoryArrayIndex ].decrement();
    instructionsArrayIndex++;
    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }

}

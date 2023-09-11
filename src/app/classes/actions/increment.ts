import { ByteInteger } from "../byte-integer";

export class Increment {
  constructor()
  {

  }


  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    memoryArray[ memoryArrayIndex ].increment();
    instructionsArrayIndex++;

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

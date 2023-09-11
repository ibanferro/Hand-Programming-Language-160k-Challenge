import { ByteInteger } from "../byte-integer";

export class MoveLeft {
  constructor()
  {

  }


  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    if( memoryArrayIndex > 0 )
    {
      memoryArrayIndex--;
    } else {
      memoryArrayIndex = memoryArray.length - 1;
    }
    instructionsArrayIndex++;

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

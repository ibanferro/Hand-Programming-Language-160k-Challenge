import { ByteInteger } from "../byte-integer";

export class MoveRight {
  constructor()
  {

  }

  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    if( memoryArrayIndex < memoryArray.length - 1 )
    {
      memoryArrayIndex++;
    } else {
      memoryArray.push( new ByteInteger( 0 ) );
      memoryArrayIndex++;
    }
    instructionsArrayIndex++;

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

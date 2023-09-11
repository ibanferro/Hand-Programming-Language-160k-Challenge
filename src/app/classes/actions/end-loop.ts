import { ByteInteger } from "../byte-integer";

export class EndLoop {
  constructor()
  {

  }

  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    if( memoryArray[ memoryArrayIndex ].value === 0 )
    {
      instructionsArrayIndex++;
    }else {
      const slicedArray: string = instructionsArray.slice( 0, instructionsArrayIndex );
      //const startLoopIndex: number = slicedArray.indexOf( "🤜" );
      const startLoopIndex: number = slicedArray.lastIndexOf( "[" );
      instructionsArrayIndex = startLoopIndex + 1;
    }

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

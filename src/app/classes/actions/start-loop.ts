import { ByteInteger } from "../byte-integer";

export class StartLoop {
  constructor()
  {

  }
  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    if( memoryArray[ memoryArrayIndex ].value === 0 )
    {
      const slicedArray: string = instructionsArray.slice( instructionsArrayIndex + 1 );
      //const endLoopIndex: number = slicedArray.indexOf( "🤛" ) + instructionsArrayIndex + 1;
      const endLoopIndex: number = slicedArray.indexOf( "]" ) + instructionsArrayIndex + 1;
      instructionsArrayIndex = endLoopIndex + 1;
    }else {
      instructionsArrayIndex++;
    }

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

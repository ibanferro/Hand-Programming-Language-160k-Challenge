import { ByteInteger } from "../byte-integer";

export class ShowPosition {
  constructor()
  {

  }

  execute( memoryArray: ByteInteger[], memoryArrayIndex: number, instructionsArray: string , instructionsArrayIndex: number )
  {
    console.log('Shown Character: ' + memoryArray[ memoryArrayIndex ].showCharacter());
    instructionsArrayIndex++;
    debugger;

    return {memoryArray, memoryArrayIndex, instructionsArray, instructionsArrayIndex};
  }
}

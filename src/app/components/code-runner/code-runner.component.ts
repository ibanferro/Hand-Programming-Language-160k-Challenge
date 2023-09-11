import { Component, OnInit } from '@angular/core';
import { Decrement } from 'src/app/classes/actions/decrement';
import { EndLoop } from 'src/app/classes/actions/end-loop';
import { Increment } from 'src/app/classes/actions/increment';
import { MoveLeft } from 'src/app/classes/actions/move-left';
import { MoveRight } from 'src/app/classes/actions/move-right';
import { ShowPosition } from 'src/app/classes/actions/show-position';
import { StartLoop } from 'src/app/classes/actions/start-loop';
import { ByteInteger } from 'src/app/classes/byte-integer';

@Component({
  selector: 'app-code-runner',
  templateUrl: './code-runner.component.html',
  styleUrls: ['./code-runner.component.scss']
})
export class CodeRunnerComponent implements OnInit {

  memoryIndex: number = 0;
  instructionsIndex: number = 0;

  memoryArray: ByteInteger[] = [];
  instructionsArray: string = '';

  constructor() {
    //this.instructionsArray = '👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊';
    this.instructionsArray = 'D[DDDDDDDRIL]RDSD[DRIIIIIL]RIISIIIIIIISSIIIS';

    this.memoryArray.push( new ByteInteger(0) );
  }

  ngOnInit(): void {
    this.execute();
  }

  execute() {
/*     const instructionsMap: {[key: string]: MoveRight | MoveLeft | Increment | Decrement | ShowPosition | StartLoop | EndLoop } = {
      '👉': new MoveRight() ,
      '👈': new MoveLeft() ,
      '👆': new Increment(),
      '👇': new Decrement(),
      '👊': new ShowPosition() ,
      '🤜': new StartLoop() ,
      '🤛': new EndLoop() ,
    }; */

    console.log('****\nSTARTING EXECUTION');
    console.log('this.instructionsArray: ' + this.instructionsArray);
    console.log('this.instructionsArray.length: ' + this.instructionsArray.length);
    console.log('this.instructionsIndex: ' + this.instructionsIndex);
    console.log('this.instructionsArray[ this.instructionsIndex ]: ' + this.instructionsArray[ this.instructionsIndex ]);
    console.log('this.memoryArray: ' + this.memoryArray);
    console.log('this.memoryArray.length: ' + this.memoryArray.length);
    console.log('this.memoryIndex: ' + this.memoryIndex);
    console.log('this.memoryArray[ this.memoryIndex ]: ' + this.memoryArray[ this.memoryIndex ]);
    console.log('***************************');

    while( this.instructionsIndex < this.instructionsArray.length )
    {
      const currentInstruction = this.instructionsArray[ this.instructionsIndex ];
      let actionObject;
      //console.log('*****\n');

      switch( currentInstruction )
      {
        //case '👉':
        case 'R':
          console.log( 'case MoveRight')
          actionObject = new MoveRight();
          break;
        //case '👈':
        case 'L':
          console.log( 'case MoveLeft')
          actionObject = new MoveLeft();
          break;
        //case '👆':
        case 'I':
          console.log( 'case Increment')
          actionObject = new Increment();
          break;
        //case '👇':
        case 'D':
          console.log( 'case Decrement')
          actionObject = new Decrement();
          break;
        //case '👊':
        case 'S':
          console.log( 'case ShowPosition')
          actionObject = new ShowPosition();
          break;
        //case '🤜':
        case '[':
          console.log( 'case StartLoop')
          actionObject = new StartLoop();
          break;
        //case '🤛':
        case ']':
          console.log( 'case EndLoop')
          actionObject = new EndLoop();
          break;
      }

      if( !actionObject )
      {
        //console.log( 'actionObject: ', actionObject)
        return;
      }
      //console.log( 'actionObject: ', actionObject)

      const {
        memoryArray,
        memoryArrayIndex,
        instructionsArray,
        instructionsArrayIndex
      } = actionObject
      .execute( this.memoryArray, this.memoryIndex, this.instructionsArray, this.instructionsIndex );


/*       console.log( 'memoryArray: ', memoryArray );
      console.log( 'memoryArrayIndex: ', memoryArrayIndex );
      console.log( 'instructionsArray: ', instructionsArray );
      console.log( 'instructionsArrayIndex: ', instructionsArrayIndex );
 */
      this.memoryArray = memoryArray;
      this.memoryIndex = memoryArrayIndex;
      this.instructionsArray = instructionsArray;
      this.instructionsIndex = instructionsArrayIndex;

      //console.log( 'this.instructionsIndex: ' + this.instructionsIndex)
      //console.log( 'currentInstruction: ' + currentInstruction)
      //console.log('this.memoryIndex: ' + this.memoryIndex);
      //console.log('this.memoryArray[this.memoryIndex].value: ', this.memoryArray[this.memoryIndex].value );
      //console.log('**************\n');

    }

  }

}

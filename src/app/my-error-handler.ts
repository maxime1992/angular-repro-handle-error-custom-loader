import { NgModule, ErrorHandler } from '@angular/core';

// https://github.com/Microsoft/TypeScript/issues/13965
// we have to do the following because of a Typescript weird behavior
export class CustomError extends Error {
  __proto__: Error;
  constructor(message?: string) {
    const trueProto = new.target.prototype;
    super(message);

    this.__proto__ = trueProto;
  }
}

/**
 * handle errors on a global level
 * if the error is an instance of CustomError, do something special
 */
export class MyErrorHandler extends ErrorHandler {
  handleError(error) {
    // when clicking on the link to display the lazy loaded component
    // the module-loader throws an error of type CustomError
    // so I expect to be able to catch it from here
    if (error instanceof CustomError) {
      console.log('Caught a CustomError!');
    } else {
      console.log('Caught a "normal" error');
    }
  }
}

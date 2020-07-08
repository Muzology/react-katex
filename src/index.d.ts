// Type definitions for react-katex
// Project: https://github.com/talyssonoc/react-katex
// Definitions by: Semyon Makhaev <semenmakhaev@yandex.ru>

declare module ReactKaTeX {
  import {Component} from 'react';

  export interface IMathProps {

    /**
     * Represents the color of the error message when KaTeX rendering fails.
     * By default the error rendering is handled by KaTeX.
     */
    errorColor?: string;

    /**
     * Represents the KaTeX markup to render.
     */
    math?: string;

    /**
     * The function to render an error when parsing fails.
     * @param {Error} error
     */
    renderError?(error: Error): void;
  }

  /**
   * Display math in a separated block, with larger font and symbols.
   */
  export class BlockMath extends Component<IMathProps> {
  }

  /**
   * Display math in the middle of the text.
   */
  export class InlineMath extends Component<IMathProps> {
  }
}

declare module 'react-katex' {
  export = ReactKaTeX
}


/*
import {Component} from 'react';

export interface IMathProps {
    children?: string,
    errorColor?: string,
    math?: string,
    renderError?(error: Error): void;
}

export class BlockMath extends Component<IMathProps>{}

export class InlineMath extends Component<IMathProps>{}
 */

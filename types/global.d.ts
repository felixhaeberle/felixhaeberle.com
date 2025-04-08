// Custom HTML elements used in the codebase
declare namespace JSX {
  interface IntrinsicElements {
    'r-grid': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    'r-cell': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      span?: string;
      'span-m'?: string;
    };
  }
}
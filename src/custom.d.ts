// custom.d.ts
declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  
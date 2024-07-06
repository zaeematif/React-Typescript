//props in Ts
//props are objects

import { ComponentPropsWithoutRef } from "react";

//METHOD-1 of TS props::

export function Button1({
  backgroundColor,
  fontSizePx,
}: {
  backgroundColor: string;
  fontSizePx: number;
}) {
  return (
    <div
      style={{
        background: `${backgroundColor}`,
        width: "fit-content",
        padding: "0.5rem",
        color: "white",
        fontSize: `${fontSizePx}px`,
      }}
    >
      NORMAL PROPS Buttons color is: {backgroundColor}
    </div>
  );
}

//METHOD-2 of TS props::

type ButtonProps = {
  backgroundColor: string;
  fontSizePx: number;
  isPill?: boolean; //making it optional using '?'
  paddingRem: number[];
};

export function Button2({
  backgroundColor,
  fontSizePx,
  isPill,
  paddingRem,
}: ButtonProps) {
  return (
    <div
      style={{
        background: `${backgroundColor}`,
        width: "fit-content",
        padding: `${paddingRem[0]}rem ${paddingRem[1]}rem`,
        color: "white",
        fontSize: `${fontSizePx}px`,
      }}
    >
      TYPE ALIAS Buttons color is: {backgroundColor}
      <br />
      <br />
      Is it a pill: {isPill}
    </div>
  );
}

//METHOD-3 of TS props::

type ButtonProps3 = {
  style: React.CSSProperties;
};

export function Button3({ style }: ButtonProps3) {
  return (
    <div style={style}>
      REACT.CSSProperties Buttons color is: {style.backgroundColor}
      <br />
      Color is: {style.color}
    </div>
  );
}

//METHOD-4 of TS props::

type ButtonProps4 = {
  //define the type of borderRadius
  borderRadius: Record<string, number>;
};

export function Button4({ borderRadius }: ButtonProps4) {
  return (
    <div style={{ background: "purple", color: "white", width: "fit-content" }}>
      RECORD Top-Left Border radius is: {borderRadius.topLeft}
      <br />
      Color is:
    </div>
  );
}

//METHOD-5 of TS props::

type Button5 = {
  func: (test: string) => number;
};

export function Button5({ func }: Button5) {
  return (
    <div
      style={{
        background: "purple",
        color: "white",
        width: "fit-content",
        margin: "2rem 0",
      }}
    >
      <h1>Button with function returns: {func("6")}</h1>
    </div>
  );
}

//METHOD-6 of TS props::

type Button6 = {
  //REACT NODE is general, allows everything from JSX element or text etc
  //use JSX Element for only allowing jsx Element
  children: React.ReactNode | JSX.Element;
};

export function Button6({ children }: Button6) {
  return (
    <div
      style={{
        background: "green",
        color: "white",
        width: "fit-content",
        margin: "2rem 0",
      }}
    >
      <h1>
        {children}
        React.ReactNode
      </h1>
    </div>
  );
}

//METHOD-7 of TS props::

type Button7 = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
};

export function Button7({ setCount, count }: Button7) {
  return (
    <div
      style={{
        background: "green",
        color: "white",
        width: "fit-content",
        margin: "2rem 0",
      }}
    >
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click Me. SetCount: {count}
      </button>
    </div>
  );
}


//METHOD-7 of TS props::

//using REACT COMPONENT-PROPS
type ButtonProps8 = ComponentPropsWithoutRef<"button">;

type Button = {
  type: 'button' | 'submit' | 'reset';
  color: 'red' | 'blue' | 'green';
}

type SuperButton = Button & {
  size: 'md' | 'lg'
} 

//rest operator
export function Button8({ type, autoFocus, ...rest }: ButtonProps8) {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click Me with Attributes
    </button>
  );
}

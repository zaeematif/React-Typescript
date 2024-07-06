import React from "react";

type User = {
  name: string;
  session: number,
};

//OMIT keyword
type Guest = Omit<User, 'name'>; 

//Generics in props
type ButtonProp <T> = {
  count: T,
  countHistory: T[]
}

const UseStateTs = <T extends number | string>({count, countHistory}: ButtonProp<T>) => {
  //useState HOOK
  const [user, setUser] = React.useState<User | null>(null);

  //useRef HOOK
  const ref = React.useRef<HTMLButtonElement | null>(null);

  const newUser: User = {
    name: "Zaeem",
    session: 4,
  };

  //make const String, not it's readOnly
  const buttonTextOption = [
    "Click Me", 
    "Take me to Link", 
    "Click me for Payment"] as const;

  return (
    <>
      <h1>User name is: {user?.name}</h1>
      <button
        ref={ref}
        onClick={() => {
          setUser(newUser);
          console.log(ref.current?.textContent);
        }}
      >
        Click Me
      </button>
      <div style={{display: "flex", flexDirection: "column"}}>
        {buttonTextOption.map((button, index) => {
          return (
            <button key={index} style={{ padding: "2px", margin: "5px 0", width: "fit-content" }}>
              {button}
            </button>
          );
        })}

        <h1>Count History is: {count}</h1>
        <h1>Count History is: {countHistory[2]}</h1>
      </div>
    </>
  );
};

export default UseStateTs;

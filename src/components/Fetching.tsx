import React from "react";

export default function Fetching() {
  React.useEffect(()=>{
    fetch("dummyURL")
    .then((res) => res.json())
    .then((data: unknown) => {
        //run it through zod
        //const todo = todoSchema.parse(data);
        
        //then apply methods and operations to it

        //ts-reset library
    })
  }, []);

  return <div>Fetching Data</div>;
}

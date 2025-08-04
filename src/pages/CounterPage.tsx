import { useState } from "react";

export default function CounterPage() {

const [counter,setCouter] = useState(0);

const counterplus=()=>{
  setCouter(counter+1);
};


  return (
    <div className="container text-center">
      <h2>Counter Page</h2>
      {/* Result Text */}
      <p>Counter: {counter}</p>
      <button onClick={counterplus}>Increase</button>
    </div>
  );
}

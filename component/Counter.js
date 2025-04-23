"use client";

import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  
  return (
    <div>{count}</div>
  );


}
      
export default Counter;

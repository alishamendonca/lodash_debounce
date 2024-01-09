import React,  { useState, useEffect, useCallback } from 'react';
interface WithCallbackProps {
    propValue: string; 
  }
const WithCallback: React.FC<WithCallbackProps> = ({ propValue }) => {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log('Component rendered!');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Prop Value: {propValue}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default WithCallback;

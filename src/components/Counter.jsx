export default function Counter( {count , add, reset, dec}) {
  return (
    <>
      <h1>Counter </h1>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>-</button>
    </>
  );
}

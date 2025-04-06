import useCounter from './CustomHookDemo';
const HooksDemo=()=>{
    const {counter,increment,decrement}= useCounter();
    return(
        <>
        <p>Counter"{coounter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}
export default HooksDemo;
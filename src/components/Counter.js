import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.show)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase({value: 5}))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

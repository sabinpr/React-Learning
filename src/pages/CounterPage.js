import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

const CounterPage = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);
  return (
    <div>
      Count is : {count} <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;

import { useHomeContext } from "../context/home.context";

function ComponentContext2() {
  const { homeContextValue } = useHomeContext();

  return (
    <div>El value del context es {homeContextValue}</div>
  )
}

export default ComponentContext2
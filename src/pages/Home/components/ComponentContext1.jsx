import { useHomeContext } from "../context/home.context";

function ComponentContext1() {
  const { setContextHomeValue } = useHomeContext();

  const handleClick = () => {
    setContextHomeValue('Example send data to context');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Enviar información por un context
      </button>
    </div>
  )
}

export default ComponentContext1
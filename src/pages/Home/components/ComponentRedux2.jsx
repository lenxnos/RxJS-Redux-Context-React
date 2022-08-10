import { useSelector } from "react-redux";

const ComponentRedux2 = () => {

  const user = useSelector(state => state.user);

  return (
    <div>El valor del redux es {JSON.stringify(user)}</div>
  )
}

export default ComponentRedux2
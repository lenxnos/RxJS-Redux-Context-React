import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

function ComponentRedux1() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createUser({ name: 'Juan', email: 'juan@user.com' }))
  }

  const handleMofidyUser = () => {
    dispatch(modifyUser({ name: 'Carlos' }));
  }

  const handleResetUser = () => {
    dispatch(resetUser());
  }

  return (
    <div>
      <button onClick={handleClick}>
        Enviar información por un redux
      </button>
      <button onClick={handleMofidyUser}>
        Modificar información por un redux
      </button>
      <button onClick={handleResetUser}>
        Reiniciar información por un redux
      </button>
    </div>
  )
}

export default ComponentRedux1
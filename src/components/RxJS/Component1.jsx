import { sharingInformationService } from "../../services/sharing-information.service"

const Component1 = () => {

  const handleClick = () => {
    sharingInformationService.setSubject(true);
  }

  const handleClickNot = () => {
    sharingInformationService.setSubject(false);
  }
  
  return (
    <div>
      <button onClick={handleClick}>Enviar information</button>
      <button onClick={handleClickNot}>No Enviar information</button>
    </div>
  )
}

export default Component1
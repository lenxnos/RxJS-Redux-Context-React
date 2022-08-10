import ComponentContext1 from "./Home/components/ComponentContext1"
import ComponentContext2 from "./Home/components/ComponentContext2"
import ComponentRedux2 from "./Home/components/ComponentRedux2"
import { HomeProvider } from "./Home/context/home.context"

function Home() {  
  return (
    <div>
      <HomeProvider>
      <ComponentContext1 />
      <ComponentContext2 />
      <ComponentRedux2 />
      </HomeProvider>
    </div>
  )
}

export default Home
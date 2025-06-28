import Vege from "../Components/home/Vege";
import Popular from "../Components/home/Popular";
import Contact from "../Components/default/Contact";
import Classic from "../Components/home/Classy";
import { HamPie, PlantChick } from "../Components/home/ClassSet";

function Home() {
  return (
    <div>
      <Vege />
      <Classic item={PlantChick} />
      <Popular />
      <Classic item={HamPie} />
      <Contact />
    </div>
  );
}

export default Home;

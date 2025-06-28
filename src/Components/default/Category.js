import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import { List, SLink } from "../../Styles/Styling";

function Category() {
  return (
    <List>
      <SLink to="/cuisine/Italian">
        <FaIcons.FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to="/cuisine/French">
        <GiIcons.GiChopsticks />
        <h4>French</h4>
      </SLink>
      <SLink to="/cuisine/American">
        <FaIcons.FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to="/cuisine/Asian">
        <GiIcons.GiBowlOfRice />
        <h4>Asian</h4>
      </SLink>
    </List>
  );
}

export default Category;

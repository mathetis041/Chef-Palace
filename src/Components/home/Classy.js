import { ClassyCard, ClassicGrid, Gradient } from "../../Styles/Styling";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Classic({ item }) {
  return (
    <Container className="mt-2">
      <ClassicGrid>
        {item.map((item, index) => {
          return (
            <ClassyCard key={index} className="mt-1">
              <Link to={item.link}>
                <img src={item.img} alt={item.label} />
                <div>
                  <h4>PHOTOS</h4>
                  <p>{item.label}</p>
                </div>
                <Gradient />
              </Link>
            </ClassyCard>
          );
        })}
      </ClassicGrid>
    </Container>
  );
}

export default Classic;

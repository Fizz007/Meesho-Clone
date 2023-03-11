import styled from "styled-components";
import { categories } from "../data";
import { mobile, tab } from "../responsive";
import CategorieItem from "../component/CategorieItem";

const Container = styled.div`

  display: flex;
  padding: 10px 2px;
  justify-content: space-between;  
  ${mobile({ padding: "0px", flexDirection:"column" })}
  ${tab({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
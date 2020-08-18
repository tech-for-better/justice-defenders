import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 10rem;
  min-height: 5rem;
  background-color: lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 2.5rem;
  width: 3rem;
  margin-bottom: 1rem;
`;
export { Icon, CardContainer };

import styled from "styled-components";

const PdfWrapper = styled.li`
  margin: 1rem;
  flex-basis: 100%;
  display: flex;
`;

const PdfLink = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-decoration: underline;
`;
export { PdfWrapper, PdfLink };

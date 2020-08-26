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
  &:hover {
    color: #e3032e;
  }
`;
const ClosePdf = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  bottom: -40px;
  right: 50%;
  text-transform: uppercase;
`;
export { PdfWrapper, PdfLink, ClosePdf };

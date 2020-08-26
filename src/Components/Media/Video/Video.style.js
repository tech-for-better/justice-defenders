import styled from "styled-components";

const VideoElement = styled.video`
  display: block;
  border: 1px solid black;
  border-radius: 3px;
`;

const VideoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { VideoElement, VideoHeader };

import React from "react";
import { Container, Flex, Img, Num, Overlay, Text } from "./style";
const GalleryItem = ({ src, num }) => {
  return (
    <Container>
      <Overlay className="overlay" />
      <Flex>
        <Text className="txt">Timeless, Intriguing, Enigmatic.</Text>
        <Num className="num">{num}</Num>
      </Flex>
      <Img src={src} className="img" alt="Nice Image" />
    </Container>
  );
};

export default GalleryItem;

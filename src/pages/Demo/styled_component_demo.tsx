import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  height: 100vh;
  background-image: radial-gradient(rgba(93, 165, 225, 0.3), rgba(93, 165, 225, 0) 40vw),
    radial-gradient(rgba(181, 169, 225, 0.3), rgba(181, 169, 225, 0) 40vw),
    radial-gradient(rgba(108, 97, 225, 0.3), rgba(100, 97, 225, 0) 40vw),
    radial-gradient(rgba(21, 139, 224, 0.2), rgba(21, 139, 22, 0) 40vw),
    radial-gradient(rgba(11, 127, 234, 0.1), rgba(11, 127, 234, 0) 40vw);
  background-position: -40vw -14rem, 50% -10rem, 60vw 1rem, 10vw calc(14rem + 20vw),
    30vw calc(14rem + 20vw);
  background-size: 80vw 90vw;
  background-repeat: no-repeat;
`;

enum Color {
  RED,
  GREEN,
  YELLOW
};

const MyContainer = () => {
  console.log(Color.RED);
  return (<Container></Container>)
}

export default MyContainer;
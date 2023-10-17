import React from 'react';
import styled from 'styled-components';

const GreenBox = styled.div`
  background: linear-gradient(to right, #4CAF50, #45a049);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Header = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
`;

const Subheader = styled.h2`
  color: white;
  font-size: 16px;
  margin: 0;
`;

const Button = styled.button`
  background: white;
  color: #4CAF50;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100px;
  border-radius: 10px;
`;

const GreenBoxComponent = () => {
    return (
      <GreenBox>
        <div>
          <Header>Got a project idea? Let us discuss the possibilities </Header>
          <Subheader>We build quality softwares and architecture solutions for businesses that care about quality, good user experience, scalability and profitability.</Subheader>
          <Button>Start a project</Button>
        </div>
        <Image src="/Users/laflame/Documents/GitHub/Touchstack-Website/src/assets/images/startprojectimg.png" alt="Right-Aligned Image" />
      </GreenBox>
    );
  };
  
  export default GreenBoxComponent;



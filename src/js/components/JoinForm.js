import React from 'react';
import styled from 'styled-components';
import Container from './Containers';
import Text from '../const/typography';
import Button from './Button';

const JoinForm = (props) => {
  return (
    <Container center>
      <Text.H3>Get Started Today</Text.H3>
      <StyledDescWrapper>
        <Text.P1>To learn more about how 18Birdies for Business can create extra revenue for your golf course, fill out the form below and we'll get in touch with you.</Text.P1>
      </StyledDescWrapper>
      <StyledForm>
        <StyledSection>
          <div>
            <label>First Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="name" />
          </div>
        </StyledSection>

        <div>
          <label>Email</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Company</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Comments</label>
          <textarea />
        </div>
        {/* <input type="submit" value="Submit" /> */}
        <Button size='large' width='fullwidth' to='#'>Submit</Button>
      </StyledForm>
    </Container>
  );
}

export default JoinForm;

const StyledDescWrapper = styled.div`
  margin: 24px auto 0;
  max-width: 700px;
`;

const StyledForm = styled.form`
  margin: 80px auto 120px;
  max-width: 600px;
  text-align: left;

  div {
    margin-bottom: 24px;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
    text-transform: uppercase;
  }

  input {
    border-radius: 0 !important;
    border: 1px solid ${props => props.theme.colors.gray100};
    height: 40px;
    width: 100%;
  }

  textarea {
    border-radius: 0 !important;
    border: 1px solid ${props => props.theme.colors.gray100};
    height: 120px;
    width: 100%;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    flex: 1;
    margin-bottom: 0;
  }

  div:first-of-type {
    margin-right: 40px;
  }
`;
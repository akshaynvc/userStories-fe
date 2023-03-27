import styled from "styled-components";
import { theme } from "../../theme";

const Section = styled.div`
  flex: 1;
  background-color: ${theme.highLight};
  padding: 24px;
  border-radius: 8px;
  margin: 0 12px;
  max-width: 400px;
`;
const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.text};
  margin-bottom: 1rem;
  text-align: center;
`;

const FormContainer = styled.form``;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Input = styled.select`
  border: 1px solid ${theme.highLight};
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.blue};
  }
`;

const Error = styled.div`
  color: red;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;
const SubTitile = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;
const SpanContainer = styled.span`
  margin-left: 8px;
  font-weight: bold;
  color: ${theme.blue};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export {
  Section,
  FormContainer,
  Heading,
  Error,
  Input,
  Label,
  Wrapper,
  Container,
  SpanContainer,
  SubTitile,
};

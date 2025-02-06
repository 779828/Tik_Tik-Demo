import styled from "styled-components";
import { Paper, Container } from "@mui/material";

// Styled Components for Clean Code
export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledPaper = styled(Paper)`
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
`;

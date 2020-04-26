import styled from 'styled-components';
import { BLACK_LIGHT } from '../../../constants/styles/colors'

export const MainDiv = styled.div`
  display: flex;
  height: 100%;
  min-height: 100%;

  .header {
    background: ${BLACK_LIGHT};
    height: 100%;
    min-width: 180px;
    width: 10%;
  }
  .content {
    background: blue;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    .header {
      height: 5vh;
      min-width: 180px;
      min-height: 25px;
      width: 100%;
    }
  }
`;


import styled from 'styled-components';
import { fiveEmptyStar, fiveFullStar } from '../../../../assets/Default';

export const StarBakcground = styled.div`
  background-image: url(${fiveEmptyStar});
  width: 144px;
  height: 22px;
`;

export const Star = styled.div`
  width: ${props => props.star * 20}%;
  height: 100%;
  background-image: url(${fiveFullStar});
  background-size: cover;
`;

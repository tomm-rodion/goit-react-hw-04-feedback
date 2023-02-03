import styled from 'styled-components';

export const Button = styled.button`
  margin: 5px;
  width: calc((100% - 30px) / 3);
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);

  :hover {
    background-color: ${props => {
      switch (props.keyStatus) {
        case 'good':
          return 'rgb(0, 255, 0, 0.4)';
        case 'neutral':
          return 'rgb(0, 0, 255, 0.4)';
        case 'bad':
          return 'rgb(255, 0, 0, 0.4)';
        default:
          throw new Error();
      }
    }};
  }
`;

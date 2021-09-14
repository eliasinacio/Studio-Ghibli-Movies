import styled from 'styled-components';

export const Container = styled.li`
  margin: 0; 
  box-sizing: border-box;

  list-style-type: none;
  max-width: 500px;
  padding: 10px 0;
  margin: 0 20px 20px 0;

  .title {
    margin: 5px 0;
  }

  .original-title {
    margin: 5px 0 20px;
  }

  .description {
    margin: 5px 0;
  }

  footer {
    width: 100%;
    margin-top: 20px;
    display: flex;

    .duration {
      margin-left: 80px;
    }
  }
`;
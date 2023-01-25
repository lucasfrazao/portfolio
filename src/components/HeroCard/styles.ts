import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 50%;
  width: 80%;
  height: 75vh;

  span:first-child {
    font-family: 'Space Mono', monospace;
    font-size: 1.25rem;
    font-weight: bold;
    color: #119da4;
  }

  h1 {
    padding: 1rem 0;
    font-size: 4rem;
    color: #ffc857;
  }

  .description {
    font-size: 1.25rem;
    color: #f9f9f9;
  }

  button {
    font-family: 'Roboto', sans-serif;
    color: #ffc857;

    padding: 0.5rem 1rem;
    margin-top: 1rem;

    background: none;
    border-radius: 0.25rem;
    border: 1px solid #ffc857;

    transition: 0.2s;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`

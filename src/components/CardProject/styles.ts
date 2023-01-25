import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  font-family: 'Roboto', sans-serif;
  color: #f9f9f9;

  width: 100%;
  max-width: fit-content;

  padding: 2rem;

  background-color: #4b3f72;
  border-radius: 0.25rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 1rem;
    width: 100%;
    padding-bottom: 1rem;
  }

  header span {
    font-size: 1rem;
    font-weight: bold;
  }

  .details {
    font-size: 0.8rem;
    font-family: 'Space Mono', monospace;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`

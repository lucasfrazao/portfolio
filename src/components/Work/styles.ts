import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  max-width: 50%;
  width: 80%;

  .title {
    font-family: 'Space Mono', monospace;
    font-size: 1.25rem;
    font-weight: bold;
    color: #119da4;
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    padding: 1rem 0;
    color: #ffc857;
  }
`

export const ListProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem 1rem;
  justify-content: space-between;
  justify-items: center;
  align-items: center;

  width: 100%;
  gap: 1rem;
`

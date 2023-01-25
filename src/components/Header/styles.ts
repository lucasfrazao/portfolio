import styled from 'styled-components'

export const Container = styled.nav`
  width: 100vw;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2.5rem;

  font-family: 'Roboto', sans-serif;
  color: #f9f9f9;

  .code {
    width: 9rem;
  }

  .code > b {
    color: #119da4;
  }

  .code > span {
    font-family: 'Space Mono', monospace;
    color: #ffc857;
  }

  .menu-pages {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
  }

  a {
    border: none;
    background: none;
  }

  .resume {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
  }

  .resume > svg {
    transition: 0.2s;

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  button {
    font-family: 'Roboto', sans-serif;
    color: #ffc857;

    padding: 0.5rem 1rem;

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
    .resume {
      display: none;
    }
  }
`

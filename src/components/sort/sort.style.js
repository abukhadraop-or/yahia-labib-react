import styled from 'styled-components';

export const Title = styled.h2`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.125rem;
  height: 3.125rem;
  justify-content: space-between;
  margin: 0;
  padding: 0.875rem 1rem;
  width: 100%;
`;

export const Arrow = styled.img`
  ${(props) => {
    if (props.down) {
      return `transform: rotate(90deg);`;
    }
    return ``;
  }};
  width: 20px;
`;

export const Filter = styled.div`
  border-top: 0.1rem solid #eee;
  padding: 0.875rem 1rem 1rem 1rem;
  width: 100%;
  ${(props) => {
    if (props.disNone) {
      return `
            display: block;
      `;
    }
    return `display: none`;
  }}
`;

export const FilterTitle = styled.h3`
  color: #808080;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 0.625rem;
`;

export const Select = styled.select`
  align-items: center;
  background: #eee;
  border-radius: 0.4rem;
  border: none;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 1 auto;
  height: 2.25rem;
  margin: 0;
  overflow: hidden;
  padding: 0.375rem 0.75rem;
  width: 100%;
  &:hover {
    background-color: #bababa
  }
`;
export const Option = styled.option`
  background: #fff;
  font-size: 0.9em;
  font-weight: normal;
  height: 1.2rem;
  min-height: 1.2em;
  white-space: nowrap;
  width: 100%;
`;
export const Bars = styled.div`
  @media (min-width: 769px) {
    width: 16.25rem;
  }
`;

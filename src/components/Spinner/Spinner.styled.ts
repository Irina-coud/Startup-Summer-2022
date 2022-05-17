import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  svg {
    width: 300px;
  }

  svg path {
    --total-length: 136px;
    stroke-linecap: round;
    stroke-width: 6;
    stroke: #3673fd;
    fill: none;
    stroke-dasharray: var(--total-length) var(--total-length);
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      stroke-dashoffset: calc(-1 * var(--total-length));
    }
    30%,
    50% {
      stroke-dashoffset: 0;
    }
    80%,
    100% {
      stroke-dashoffset: var(--total-length);
    }
  }
`;

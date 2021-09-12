import React from 'react'
import styled from "styled-components";
function Header() {
    return (
        <Wrapper>
            <section>
                <h1>Edsolabs 5-Day Forecast</h1>
            </section>
        </Wrapper>

    )
}

const Wrapper = styled.section`
  h1 {
    font-size: 3em;
    text-align: center;
    color: palevioletred;
  }
`;
export default Header

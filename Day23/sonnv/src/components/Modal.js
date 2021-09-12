import React from 'react'
import styled from 'styled-components'

const Modal = ({titleModal}) => {
    return (
        <Wrapper>
            <div>
              <h4> {titleModal}</h4>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    text-align: center;
    margin : 0 auto ;
    width : 20%;
    background: #FBCBBE;
    padding : .09px;
    border-radius: 30px;
    margin-bottom:30px; 
    color: blck;
`;
export default Modal

import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import styled from 'styled-components';

const LinkFooter = styled.a`
    padding:0 5px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

const Footer = (props) => {
    const test = () => {
        props.handleOpen(true);
    }
    return (
        <>
            <p className="footer">
                © 2021 by FE class, Made width
                <FavoriteIcon className="footer__icon" fontSize='small' />
                by
                <LinkFooter
                    onClick={test}>
                    {process.env.REACT_APP_NAME}
                </LinkFooter></p>
        </>
    )
}

export default Footer

import styled from 'styled-components';
import {fontSize} from '../../style/Utilities';
import {BRAND_COLOR, BACKGROUND_COLOR} from '../../style/Vars';

/* tslint:disable:variable-name */
export const Button = styled.button`
    ${fontSize(16)};

    appearance: none;
    background-color: ${BRAND_COLOR};
    border-radius: 0;
    border: 0;
    color: ${BACKGROUND_COLOR};
    cursor: pointer;
    font-family: inherit;
    font-weight: normal;
    margin: 0;
    padding: 3px 5px;
`;

export const Header = styled.div`
    margin-bottom: 10px;
`;

export const Quote = styled.div`
    line-height: 1.4;
    margin-bottom: 10px;
`;

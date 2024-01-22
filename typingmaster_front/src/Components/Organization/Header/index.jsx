import React from "react";
import { Link } from "react-router-dom";
import * as S from './styled'

const Header = () => {
    return(
        <S.HeaderWrap>
            <h1><Link to={'/'}>TypingMaster</Link></h1>
        </S.HeaderWrap>
    )
}

export default Header;
import styled from "styled-components";

export const Container = styled.div`
    background-color: #303c4d;
    border-radius: 10px;
    padding: 10px;
    position: relative ;
    height: 280px ;
    
    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        
    }
    button {
        display: block;
        background-color: #d32a2a;
        position: absolute;
        bottom: 10px ;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
`;
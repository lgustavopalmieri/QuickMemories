import React from "react";
import { MemoryContainer ,MemoryStyled, TextMemoStyled,TitleMemoStyled, FooterMemoStyled } from "./style";
import { VscStarFull,VscTrash,VscEdit } from "react-icons/vsc"

export default function Memory () {
    return (

        <MemoryContainer >
            <MemoryStyled>
                <TitleMemoStyled>Ligar para padaria as 5 e 15 na sexta-feira fwa sda dsadasd asdasd asdasdasd asd </TitleMemoStyled>
                <TextMemoStyled>Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Id dolore ab illo quia minima officia
                    officiis cupiditate eum explicabo,
                    suscipit cumque veritatis numquam accusantium
                    architecto minus alias, eligendi nobis tempore.
                    elit. Id dolore ab illo quia minima officia
                    officiis cupiditate eum explicabo,
                    suscipit cumque veritatis numquam accusantium
                    architecto minus alias, eligendi nobis tempore.
                    elit. Id dolore ab illo quia minima officia
                    officiis cupiditate eum explicabo,
                    suscipit cumque veritatis numquam accusantium
                    architecto minus alias, eligendi nobis tempore.
                </TextMemoStyled>
            </MemoryStyled>
            <FooterMemoStyled>
                <VscStarFull />
                <VscEdit />
                <VscTrash />
            </FooterMemoStyled>
        </MemoryContainer>
        
    )
}
import React,{ useEffect, useState} from "react";
import { MainStyled } from "./style";

import AddButton from "../AddButton/index.jsx";
import Memory from "../Memory";
import  api  from "../../services/api"

export default function Main () {

    const [memories, setMemories] = useState([]);

    useEffect (() => {
        api.get("memories").then(({data}) =>{
            setMemories(data.memories)
        })

        console.log(memories)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainStyled>
            

            {memories?.map((memory) =>(
                <Memory
                key={memory._id}
                id={memory._id}
                title={memory.title}
                text={memory.text}
                favorite={memory.favorite}
                />
            ))}
            <AddButton />
        </MainStyled>
    )
}
import { TextField, Button} from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutEffect, useState } from "react";

export default function Text() {
    let [Text,setText] = useState("")
    let [Post,setPost] = useState([])

    function btn() {
        let Data = [...Post, {id:Post.length + 1, title:Text}]
        setPost(Data)
    }


    function Del(e) {
        let nawPublic = Post.filter((Test)=> Test.id !== e)
        setPost(nawPublic)
    }

    return(
        <Box sx={{
            display:"flex",
            alignItems:"center",
            flexDirection:"column",
            height:"90vh",
            margin:"50px 0 10px"
        }}>
        <Box sx={{
            display:'flex',
            alignItems:"center",
        }}>
            <TextField onChange={(e)=>setText(e.target.value)} fullWidth type="text"></TextField>
            <Button variant="contained" sx={{
                height:"55px"
            }} onClick={btn}>add post</Button>
        </Box>
        <Box sx={{
            display:"flex",
            alignItems:"center",
        }}>
            <ol>
            {Post.map((props)=>{
                return(
                    <Box sx={{
                        display:"flex",
                        alignItems:"center",
                    }}>
                        <p>{props.id}</p>
                        <p>{props.title}</p>
                        <Button sx={{margin:"10px 20px 0"}} color="error" onClick={()=>Del(props.id)} variant="contained">delete</Button>
                    </Box>
                )
            })}
            </ol>
            
        </Box>
        </Box>
    )
}
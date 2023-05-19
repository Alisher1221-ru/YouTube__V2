import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function Title() {
    const [card,setcard] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((cart)=>cart.json())
        .then((postcart) => setcard(postcart))
    },[])

    return(
        <Box sx={{
            width:"100%",
            height:"90vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'column',
        }}>
        {card.slice(-1).map((post)=>{
            return <img src={post.url} alt=""/>
        })}
        {card.slice(-1).map((post)=>{
            return <h3 className="h2__item">{post.title}</h3>
        })}
        <Link to={-1}><Button variant="contained">Back</Button></Link>
        </Box>
    )
}
export default Title
import { Box, Grid } from "@mui/material"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
    const [card,setcard] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((cart)=>cart.json())
        .then((postcart) => setcard(postcart))
    },[])

    return(
        <Grid xs={3} container spacing={1}>
                <Link to={`/cart`}>
                <Box component={"div"} sx={{
                        width:'500px',
                        height:'400px',
                        borderRadius:"10px",
                        border:"1px solid gray",
                        overflow:"hidden",
                        margin:"0 0 20px",
                    }}>
                        {card.slice(-1).map((post)=>{
                            return <img src={post.url} width={"100%"} height={"70%"} alt=""/>
                        })}
                        <Box component={"div"} sx={{
                            width:"100%",
                            height:"100%",
                            padding:"10px",
                        }}>
                            <Box component={"div"} sx={{
                               display:"flex" ,
                               alignItems:"center",
                               justifyContent:"space-between"
                            }}>
                                <img className="img__cart" src="https://avatars.mds.yandex.net/i?id=7a7bc2355993851fe29d3540e7ade95f-3734103-images-thumbs&n=13" width={"50px"} alt=""/>
                            {card.slice(-1).map((post)=>{
                                return <h3 className="h2__item">{post.title}</h3>
                            })}
                            </Box>
                        </Box>
                    </Box>
                </Link>
                </Grid>
    )
}
export default Cart
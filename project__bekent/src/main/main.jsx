import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Cart from "../cart"
import { Link } from "react-router-dom";

function Main() {
    return(
        <Box component={"main"}>
            <div>
                <div className="item__mini">
                <Link to={"/"}><p>All</p></Link>
                </div>
                <div className="item__mini">
                    <p>music</p>
                </div>
                <div className="item__mini">
                    <p>online</p>
                </div>
                <div className="item__mini">
                    <p>online games</p>
                </div>
                <div className="item__mini">
                    <p>phonk</p>
                </div>
                <div className="item__mini">
                    <p>all on my</p>
                </div>
                <div className="item__mini">
                    <p>futbol</p>
                </div>
                <div className="item__mini">
                    <Link to={"/input"}><p>capcut</p></Link>
                </div>
            </div>

            <Grid container spacing={2} columns={16} sx={{
                margin:"50px 0 0 ",
                justifyContent:"center"
            }}>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
            </Grid>
        </Box>
    )
}
export default Main
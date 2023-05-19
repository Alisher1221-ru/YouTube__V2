import { Box } from "@mui/material";
import img from "../img/viber.png"



function Header() {
    return(
        <Box component={"header"}>
            <Box className="header__menu" component={"div"}>
            <div className="menu__header">
                <div className="burger__manu">
                    <div className="linia__burger_1"></div>
                    <div className="linia__burger_2"></div>
                    <div className="linia__burger_3"></div>
                </div>
                <img className="youtube" src={img} width={"100px"} alt=""/>
            </div>
            <div className="menu__search">
                <input type="text" placeholder="search"/>
                <img src="https://cdn.icon-icons.com/icons2/2469/PNG/512/close_delete_remove_cross_icon_149505.png" width={"30px"} alt="" />
                <div>
                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" width={"20px"} alt=""/>
                </div>
            </div>
            <div className="icons">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107822.png" width={"25px"} alt=""/>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" width={"30px"} alt=""/>
            </div>
            </Box>
        </Box>
    )
}
export default Header
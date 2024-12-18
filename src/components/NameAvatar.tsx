// // import { useContext } from "react"
// // import { UserContext } from "./Home"
// // import { Avatar, Box, Button, Typography } from "@mui/material";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./UpdateDetails";

// import { useContext } from "react";
// import { Avatar, Box, Button, Typography } from "../../node_modules/@mui/material/index";
// import { UserContext } from "./Home";


// const UserAvatar = () => {
//     const context = useContext(UserContext);
//     let firstL = '';
//     if (context) {
//         firstL = context.user.firstName[0]
//     }
//     return (<>
//         <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>

//             <Avatar sx={{ bgcolor: 'rgb(224, 64, 155)', marginRight: '15px' }}>{firstL}</Avatar>

//             <Typography variant="h3">hello {firstL}</Typography>
//             <Button variant="text">update details</Button>

//         </Box>

//     </>)
// }
// export default UserAvatar;


const UserAvatar = () => {
    const context = useContext(UserContext);
    let firstL = '';
    if (context) {
        firstL = context.user.firstName[0];
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <Avatar sx={{ bgcolor: 'rgb(224, 64, 155)', marginRight: '15px' }}>{firstL}</Avatar>
            <Typography variant="h3">hello {firstL}</Typography>
            <Button variant="text">update details</Button>
        </Box>
    );
}
export default UserAvatar;
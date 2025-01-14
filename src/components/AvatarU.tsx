import { useContext, useState } from "react";
import { UserContext } from "./userContext";
import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import UpdateDetails from "./UpdateDetails";


const style = {
    position: "absolute",
    top: "5%",
    left: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 2,
    padding: 2,
    width: 250,
    bgcolor: 'background.paper',
    borderRadius: 2,

}
const AvatarU = () => {
    const context = useContext(UserContext);
    // console.log("User context: ", context?.user.firstName); 
    const [open, setOpen] = useState(false);
    if (!context)
        return null;
    return (<>
        <Box sx={style}>
            <Typography sx={{
                fontWeight: 'bold',
                color: '#333', marginBottom: 1
            }}>
                Hello {context?.user.firstName}</Typography>
            <Avatar sx={{
                bgcolor: pink[600]
                , width: 55, height: 55,
                fontSize: 24, fontWeight: 'bold'
            }}>
                {context?.user.firstName.charAt(0).toLocaleUpperCase()}
            </Avatar>
            <Button color='primary' variant="contained"
                sx={{
                    background: 'black',
                    color: 'white',
                    borderRadius: '10px',
                    border: '2px solid white', mt: 2
                }}
                onClick={() => setOpen(true)}>
                update detailes
            </Button>
        </Box>
        <Modal open={open} onClose={() => setOpen(false)}
            aria-labelledby="update-form-modal">
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 24,
                p: 4
            }}>
                <UpdateDetails setUpdate={() => setOpen(false)} />
            </Box>

        </Modal>
    </>)
}
export default AvatarU;
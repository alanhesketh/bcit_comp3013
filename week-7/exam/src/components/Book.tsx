import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BookInterface from "../BookInterface";


type setBookCallback = (id: number) => void;

interface BookProps {
    key: number,
    book: BookInterface,
    setBook: setBookCallback,
}

export default function Book(props: BookProps) {
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <List>
                <ListItem disablePadding onClick={()=>{props.setBook(props.book.id)}} >
                    <ListItemButton>
                        <ListItemIcon>
                            <img src={props.book.coverImg} height='50' />
                        </ListItemIcon>
                        <ListItemText primary={props.book.name} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
}

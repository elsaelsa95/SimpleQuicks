import {
    Box,
    Divider,
    Modal,
    Avatar,
    Typography,
    IconButton,
    TextField,
    Button,
    Grid
} from "@mui/material"
import { SxProps, Theme } from "@mui/material/styles"

interface FlexBoxProps {
    children: React.ReactNode
    sx?: SxProps<Theme>
}

export const FlexBox = ({ sx, children }: FlexBoxProps) => {
    return (
        <Box
            sx={[
                { display: "flex" },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            {children}
        </Box>
    )
}

import { useState } from "react"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

function ChildModal() {
    const [openConversation, setOpenConversation] = useState(false)
    const handleOpenConversation = () => setOpenConversation(true)
    const handleCloseConversation = () => setOpenConversation(false)

    return (
        <>
            <Grid sx={{
                ml: "500px",
                mr: "34px",
                mt: "50px",
                minHeight: "100px",
                backgroundColor: "white",
            }}>
                <FlexBox sx={{ flexDirection: "column" }}>
                    <FlexBox sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <FlexBox sx={{ flexDirection: "row", ml: 3, mt: 3, gap: 1 }}>
                            <IconButton onClick={handleCloseConversation}>
                                <ArrowBackIcon sx={{ color: "#333333" }} />
                            </IconButton>
                            <Typography variant="body1" sx={{ color: "#2F80ED" }}>
                                I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
                            </Typography>

                        </FlexBox>
                        <IconButton onClick={handleCloseConversation}>
                            <CloseIcon sx={{ color: "#333333", mr: 3 }} />
                        </IconButton>
                    </FlexBox>
                    <Typography variant="subtitle2" sx={{ color: "#333333", ml: 9, mb: 3 }}>
                        3 Participants
                    </Typography>
                    <Divider />
                    <FlexBox sx={{ flexDirection: "column", alignItems: "flex-end", mr: 5 }}>
                        <Typography sx={{ color: "#9B51E0", ml: 4 }}>
                            You
                        </Typography>
                        <FlexBox sx={{ ml: 4, mb: 3 }}>
                            <TextField
                                id="outlined-read-only-input"
                                defaultValue="No worries. It will be completed ASAP. I’ve asked him yesterday."
                                variant="outlined"
                                multiline maxRows={5}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                }}
                            />
                        </FlexBox>
                    </FlexBox>
                    <Divider>
                        <Typography sx={{ color: "#4F4F4F" }}>
                            Today June 09, 2021
                        </Typography>
                    </Divider>
                    <FlexBox sx={{ flexDirection: "column", alignItems: "flex-start", ml: -1 }}>
                        <Typography sx={{ color: "#E6A443", ml: 4 }}>
                            Mary Hilda
                        </Typography>
                        <FlexBox sx={{ ml: 4, mb: 3 }}>
                            <TextField
                                id="outlined-read-only-input"
                                defaultValue="Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks."
                                variant="outlined"
                                multiline maxRows={5}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                }}
                            />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox sx={{ flexDirection: "column", alignItems: "flex-end", mr: 5 }}>
                        <Typography sx={{ color: "#9B51E0", ml: 4 }}>
                            You
                        </Typography>
                        <FlexBox sx={{ ml: 4, mb: 3 }}>
                            <TextField
                                id="outlined-read-only-input"
                                defaultValue="Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary."
                                variant="outlined"
                                multiline maxRows={5}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                }}
                            />
                        </FlexBox>
                    </FlexBox>
                    <Divider>
                        <Typography sx={{ color: "#EB5757" }}>
                            New Message
                        </Typography>
                    </Divider>
                    <FlexBox sx={{ flexDirection: "column", alignItems: "flex-start", ml: -1 }}>
                        <Typography sx={{ color: "#43B78D", ml: 4 }}>
                            Obaidullah Amarkhil
                        </Typography>
                        <FlexBox sx={{ ml: 4, mb: 3 }}>
                            <TextField
                                id="outlined-read-only-input"
                                defaultValue="Morning. I’ll try to do them. Thanks "
                                variant="outlined"
                                multiline maxRows={5}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                }}
                            />
                        </FlexBox>
                    </FlexBox>
                    <FlexBox sx={{ flexDirection: "row", alignItems: "flex-start", ml: -1, gap: 3 }}>
                        <FlexBox sx={{ ml: 4, mb: 3 }}>
                            <TextField
                                id="input"
                                variant="outlined"
                                placeholder="Type a new message"
                                multiline maxRows={5}
                                sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                }}
                            />
                        </FlexBox>
                        <Button variant="contained"> Send </Button>
                    </FlexBox>
                </FlexBox>
            </Grid>
        </>
    )
}

import { Chat } from "@/interfaces/chat"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface ChatListProps {
    data: Chat
}

export default function ChatList({ data }: ChatListProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <FlexBox sx={{ flexDirection: "column" }}>
            <FlexBox sx={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                <FlexBox sx={{ flexDirection: "row" }}>
                    <Avatar sx={{ ml: 3, width: 34, height: 34, fontSize: 12 }}>
                        <PersonOutlineIcon />
                    </Avatar>
                    <Avatar sx={{ ml: -2.5, width: 34, height: 34, backgroundColor: "#2F80ED" }}>
                        <PersonOutlineIcon />
                    </Avatar>
                </FlexBox>
                <FlexBox sx={{ flexDirection: "row", ml: 2, gap: 1 }}>
                    <Typography variant="body1" sx={{ color: "#2F80ED" }} onClick={handleOpen}>
                        {data.id}-{data.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#4F4F4F" }} onClick={handleOpen}>
                        {data.date}{" "}{data.time}
                    </Typography>
                </FlexBox>
            </FlexBox>
            <Typography fontWeight="bold" sx={{ color: "#4F4F4F", ml: 11 }} onClick={handleOpen}>
                {data.name}:
            </Typography>
            <Typography sx={{ color: "#4F4F4F", ml: 11 }} onClick={handleOpen}>
                {data.message}
            </Typography>
            <Divider sx={{ m: 3 }} />
            <Modal
                open={open}
                onClose={handleClose}
            >
                <ChildModal />
            </Modal>
        </FlexBox>

    )
}
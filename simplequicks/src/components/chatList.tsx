import { Box, Divider } from "@mui/material"
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

import { Chat } from "@/interfaces/chat"
import { Avatar, Typography } from "@mui/material"

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface ChatListProps {
    data: Chat
}

export default function ChatList({ data }: ChatListProps) {
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
                    <Typography variant="body1" sx={{ color: "#2F80ED" }}>
                        {data.id}-{data.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#4F4F4F" }}>
                        {data.date}{" "}{data.time}
                    </Typography>
                </FlexBox>
            </FlexBox>
            <Typography fontWeight="bold" sx={{ color: "#4F4F4F", ml: 11 }}>
                {data.name}:
            </Typography>
            <Typography sx={{ color: "#4F4F4F", ml: 11 }}>
                {data.message}
            </Typography>
            <Divider sx={{ m: 3 }} />
        </FlexBox>

    )
}
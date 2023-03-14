import { Box, Typography } from "@mui/material"

export default function Task() {

    return (
        <>
            <Box sx={{
                ml: "500px",
                mr: "34px",
                mt: "50px",
                minHeight: "700px",
                backgroundColor: "white",
            }}>
                <Typography sx={{ color: "black" }}>
                    Task Section
                </Typography>
            </Box>
        </>
    )
}
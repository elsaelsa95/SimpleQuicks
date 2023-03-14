import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { DummyChatList } from "@/fake-db/chat";
import ChatList from "./chatList";

export default function Chat() {
  return (
    <>
      <Box sx={{
        ml: "500px",
        mr: "34px",
        mt: "50px",
        minHeight: "700px",
        backgroundColor: "white",
      }}>
        <Grid>
          <FormControl sx={{ minWidth: "95%", m: 3 }} variant="outlined">
            <InputLabel>Search</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid>
          {DummyChatList.map((value, index) => (
            <ChatList data={value} key={index} />
          ))}
        </Grid>
      </Box>
    </>
  )
}
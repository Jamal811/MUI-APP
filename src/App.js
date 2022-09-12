import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "grey",
      color: "white",
    },
  }));
  return (
    <div>
      <Button variant="text" disabled>
        Text
      </Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="otherColor"
        size="large"
      >
        settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="primary"
        size="large"
      >
        Add
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1" component="p">
        it uses h1 styles but its p tag
      </Typography>
      <BlueButton variant="contained" size="large">
        New Button
      </BlueButton>
      <BlueButton>New Unique Button</BlueButton>
    </div>
  );
}

export default App;

import {createStyles} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  centeredText: {
    textAlign: "center",
  }
})
)

  const Landing = () => {
    const {classes} = useStyles();
  return <h1 className={classes.centeredText}>Welcome to the homepage. Anyone can see this page</h1>;
};

export default Landing;

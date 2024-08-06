import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  navbar: {
    boxShadow: "none !important",
    backgroundColor: theme.palette.background.default,
    paddingBottom: "20px"
  },
  toolbar: {
    // backgroundColor: "#ffffff",
    color: "#326039",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 2rem"
  },

  signInButton: {
    color: "#ffffff",
    backgroundColor: "#4caf50",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },

  mainContainer: {
    height: "100%",
    display: "flex",
    alignItems: "start",
  },
  welcomeTextContainer: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  welcomeText: {
    color: "#fff",
    textAlign: "center",

  },
  formPaper: {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: "#ffffff",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'

  },
  nextButton: {
    // marginTop: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  backButton: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;

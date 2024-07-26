import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  navbar: {
    boxShadow: "none !important",
    backgroundColor: "#ffffff !important",
    marginBottom:"20px"
  },
  toolbar: {
    backgroundColor: "#ffffff",
    color: "#326039",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin:"0 2rem"
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
    alignItems: "center",
  },
  welcomeTextContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(4),
  },
  welcomeText: {
    color: "#fff",
    textAlign: "center",
  },
  formPaper: {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
   
  },
  nextButton: {
    marginTop: theme.spacing(3),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  backButton: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;

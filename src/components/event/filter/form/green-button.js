import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

const GreenButton = withStyles({
  root: {
    color: "#fff",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
});

export default GreenButton(Button);

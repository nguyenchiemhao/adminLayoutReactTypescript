import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import spriteImage from "../../assets/images/spritesTrip.png"

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    move: {
      marginLeft: '200px',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.complex
      })
    },
    spriteImage: {
      width: 1536 / 6,
      height: 256,
      background: `url(${spriteImage})`,
      animation: `$spriteAnimation 1s steps(6) infinite`,

    },
    "@keyframes spriteAnimation": {
      "from": {
        backgroundPosition: 0
      },
      "to": {
        backgroundPosition: -1536
      }
    },
  })
)

export default useStyle;
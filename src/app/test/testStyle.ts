import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import spriteImage from "../../assets/images/spritesTrip.png"

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    testButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    border: {
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[6],
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.complex
      })
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
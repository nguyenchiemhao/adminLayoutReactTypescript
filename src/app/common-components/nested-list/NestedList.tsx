import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import useStyles from "./NestedList.style";
import CustomListItem from "../list-item/CustomListItem";

interface INestedListProps {
  title?: string;
}

export default function NestedList(props: INestedListProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader' className={classes.listTitle}>
          {props.title}
        </ListSubheader>
      }
      className={classes.root}
    >
      {["Inbox", "Starred"].map((text, index) => (
        <CustomListItem icon={<SendIcon />} title={text} key={index} to='/test' />
      ))}

      <CustomListItem
        icon={<SendIcon />}
        title='Inbox'
        key='Inbox'
        rightIcon={open ? <ExpandLess /> : <ExpandMore />}
        onClick={handleClick}
      />
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

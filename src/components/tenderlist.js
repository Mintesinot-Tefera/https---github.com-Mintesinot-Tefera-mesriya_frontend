import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import TenderDetail from "./tenderdetail";
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



export default function TenderList() {
  const classes = useStyles();

  const navigate = useNavigate();

  const navigateToTenderDetail = () => {
    navigate('/tenderdetail');
  };

  return (
    <List className="bg-white">
      <ListItem alignItems="flex-start" onClick={navigateToTenderDetail}>
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="ኤሌክትሪክ ዝርጋታ"
          secondary={
            <React.Fragment>
              <div className='flex gap-10'>
                <Typography
                  component="span"
                  variant="body2"

                  className="mb-4"
                  color="textPrimary"
                >
                  ሙሉ ክፍያ 100000
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-4"
                  color="textPrimary"
                >
                  ስኔ 20/2014
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-10"
                  color="textPrimary"
                >
                  ከቅኑ 9፡00 ሰአት
                </Typography>

              </div>
              {" ለአዲስ 17ኛ ፎቅ ህንጻ የሚሆን ኤሌትሪክ ዝርጋታ  በ ስኔ 28 ቀን እና…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" onClick={navigateToTenderDetail}>
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="ኤሌክትሪክ ዝርጋታ"
          secondary={
            <React.Fragment>
              <div className='flex gap-10'>
                <Typography
                  component="span"
                  variant="body2"

                  className="mb-4"
                  color="textPrimary"
                >
                  ሙሉ ክፍያ 100000
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-4"
                  color="textPrimary"
                >
                  ስኔ 20/2014
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-10"
                  color="textPrimary"
                >
                  ከቅኑ 9፡00 ሰአት
                </Typography>

              </div>
              {" ለአዲስ 17ኛ ፎቅ ህንጻ የሚሆን ኤሌትሪክ ዝርጋታ  በ ስኔ 28 ቀን እና…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start" onClick={navigateToTenderDetail}>
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="ኤሌክትሪክ ዝርጋታ"
          secondary={
            <React.Fragment>
              <div className='flex gap-10'>
                <Typography
                  component="span"
                  variant="body2"

                  className="mb-4"
                  color="textPrimary"
                >
                  ሙሉ ክፍያ 100000
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-4"
                  color="textPrimary"
                >
                  ስኔ 20/2014
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  className="mb-10"
                  color="textPrimary"
                >
                  ከቅኑ 9፡00 ሰአት
                </Typography>

              </div>
              {" ለአዲስ 17ኛ ፎቅ ህንጻ የሚሆን ኤሌትሪክ ዝርጋታ  በ ስኔ 28 ቀን እና…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />


    </List>
  );
}

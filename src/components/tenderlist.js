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
import { LOAD_TENDERS } from '../GraphQL/Queries';
import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";



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

  const navigateToTenderDetail = (id) => {
    navigate(`/tenderdetail/${id}`)
  };

  const { error, loading, data } = useQuery(LOAD_TENDERS);
  const [tenders, setTenders] = useState([]);
  
  useEffect(() => {
    if (data) {
      setTenders(data.tenders);
    }
  }, [data]);


  return (
    <List className="bg-white">
      {tenders.map((val) => {
        return <div>
          <ListItem alignItems="flex-start" onClick={() => { navigateToTenderDetail(val.id) }}>
            <ListItemText
              primary=
              {val.title}
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
                      {val.start_date}
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
        </div>
      })}
    </List>


    // </div>
  );
}

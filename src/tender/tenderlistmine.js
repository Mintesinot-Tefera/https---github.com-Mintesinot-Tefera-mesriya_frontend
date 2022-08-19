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
import { TENDERS_OF_LOGGED_IN_USER } from '../GraphQL/Queries';
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



export default function TenderListMine() {
    const classes = useStyles();

    const companyidfromlocalstorage = window.localStorage.getItem("companyid");

    const { error, loading, data } = useQuery(TENDERS_OF_LOGGED_IN_USER, {
        variables: { _eq: companyidfromlocalstorage }
    });

    const [tenders, setTenders] = useState([]);


    useEffect(() => {
        if (data) {
            setTenders(data.tenders);
        }
    }, [data]);

    const navigate = useNavigate();

    const navigateToTenderDetail = (id) => {
        if (data) {
            // console.log(data.tenders)
            window.localStorage.setItem("tenderid", id);
            navigate(`/mytendersdetail`)
        }
        else {
            return <div>
                You haven't created tender yet
            </div>
        }
    };

    const navigateToProposalsToMyTender = (id) => {
        if (data) {
            // console.log(data.tenders)
            window.localStorage.setItem("tenderid", id);
            navigate(`/proposalslisttomytender`)
        }
        else {
            return <div>
                You haven't created tender yet
            </div>
        }
    };

    return (
        <div className='px-20 py-14 bg-gray-300'>
            <h5 className="text-sky-900 text-xl font-medium mb-2">
                የኔ ጨረታዎች MY Tenders
            </h5>
            <List className="bg-white">
                {tenders.map((val) => {
                    return <div>
                        <ListItem alignItems="flex-start"
                        >
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
                                                 {val.updated_at}
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
                                                  {val.category}
                                            </Typography>

                                        </div>
                                        {" ለአዲስ 17ኛ ፎቅ ህንጻ የሚሆን ኤሌትሪክ ዝርጋታ  በ ስኔ 28 ቀን እና…"}
                                    </React.Fragment>
                                }
                            />
                            <button
                                type="submit"
                                className="text-white my-8 mr-10 bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => { navigateToTenderDetail(val.id) }}

                            >
                                View Details
                            </button>
                            <button
                                type="submit"
                                className="text-white my-8 bg-sky-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => { navigateToProposalsToMyTender(val.id) }}
                                
                                
                            >
                                View submitted proposals
                            </button>

                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                })}
            </List>
        </div>

    );
}

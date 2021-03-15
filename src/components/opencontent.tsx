import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    openContentCard: {
        background: 'linear-gradient(229.75deg, #A6EEFA -8.47%, #2399CC 170.4%)',
        height: 849
    },
    headlineText: {
        fontFamily: 'Lato',
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 60px;
        // letter-spacing: 0px;
        textAlign: 'center',
        width: 1296
    },
    descriptionTest: {
        fontFamily: 'Roboto',
        fontSize: 21,
        fontStyle: 'normal',
        fontWeight: 400,
        // line-height: 30px;
        // letter-spacing: 0px;
        textAlign: 'center',
        width: 1174
    },
    topSpacer: {
        height: '105px'
    },
    midSpacer: {
        height: '38px'
    },
    cardSpacer: {
        height: '52px'
    },
    buttonSpacer: {
        height: '37px'
    }
}))

export interface ContentProps {
    headline: String,
    text: String
}

const Content = ({ headline, text }: ContentProps) => {
    const classes = useStyles();

    return (
        <Grid container direction='column' alignItems='center' className={classes.openContentCard}>
            <Grid item className={classes.topSpacer} />
            <Grid item>
                <Typography variant='h2' className={classes.headlineText}>
                    {headline}
                </Typography>
            </Grid>
            <Grid item className={classes.midSpacer} />
            <Grid item>
                <Typography variant='body2' className={classes.descriptionTest}>
                    {text}
                </Typography>
            </Grid>
            <Grid item className={classes.cardSpacer} />
            <Grid item>
                cards go here
            </Grid>
            <Grid item className={classes.buttonSpacer} />
            <Grid item>button</Grid>

        </Grid>
    )
}

export default Content
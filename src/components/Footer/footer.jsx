import React from 'react'
import './footer.css'
import Typography from '@material-ui/core/Typography';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
    return (
        <div className="footer">
            
            <Typography style={{textAlign:'center'}}  variant="h6" component="h2">
            Copyright © 2021 Code Blog.

            </Typography>
            {/* <FacebookIcon color="primary" />

            <YouTubeIcon style={{ color: "#e73e30" }} />

            <TwitterIcon style={{ color: "#5ea9dd" }} />

            <LinkedInIcon style={{ color: "#0077b5" }} /> */}
        </div>
    )
}
export default Footer

import { createMuiTheme } from '@material-ui/core/styles';

export const GridStyle = {
    justifyContent:"space-around",
    display:"flex",
    // padding: "10px",
};

export const CardStyle = {
    justifyContent:"space-evenly",
    // width:"40%",
    position: "relative",
    alignContent:"center",
    display:"flex",
    padding:"20px", 
    boxShadow: '5px 10px 8px #888888', 
}

export const theme = createMuiTheme({
    palette: {
      type:"dark"
    },
  });


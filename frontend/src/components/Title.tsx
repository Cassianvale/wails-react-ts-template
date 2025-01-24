import Typography from "@mui/material/Typography";

// eslint-disable-next-line react/prop-types
function Title({ children }) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export default Title;

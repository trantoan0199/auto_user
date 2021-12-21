import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  input: {
    width: 270,
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={5} className={classes.container}>
        <Grid item xs={8} sm={6} md={8}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1vOYSM5ERm_yJwMrdSGLBcZc95Rs&ehbc=2E312F"
            width="100%"
            height="100%"
          ></iframe>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <form>
            <div class="mb-3">
              <label class="form-label">Họ và Tên</label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Emaill</label>
              <input type="email" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Yêu cầu</label>
              <input type="text" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">
              Gửi
            </button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;

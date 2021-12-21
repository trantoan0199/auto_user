import React from "react";
import {
  Button,
  ButtonBase,
  Card,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#D9D9D6",
    padding: "20px",
    marginBottom: 20,
  },
}));

function Blog() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <h3 style={{ fontSize: 35 }}>TIN TỨC</h3>
      </div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase>
                    <img
                      alt=""
                      src="https://vnn-imgs-f.vgcloud.vn/2019/09/04/14/sieu-bo-manh-nhat-trong-lich-su-lamborghini-gia-gan-84-ty.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h3">Standard license</Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Xem chi tiết</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase>
                    <img
                      alt=""
                      src="https://vnn-imgs-f.vgcloud.vn/2019/09/04/14/sieu-bo-manh-nhat-trong-lich-su-lamborghini-gia-gan-84-ty.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h3">Standard license</Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Xem chi tiết</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase>
                    <img
                      alt=""
                      src="https://vnn-imgs-f.vgcloud.vn/2019/09/04/14/sieu-bo-manh-nhat-trong-lich-su-lamborghini-gia-gan-84-ty.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h3">Standard license</Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Xem chi tiết</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase>
                    <img
                      alt=""
                      src="https://vnn-imgs-f.vgcloud.vn/2019/09/04/14/sieu-bo-manh-nhat-trong-lich-su-lamborghini-gia-gan-84-ty.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="h3">Standard license</Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button>Xem chi tiết</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;

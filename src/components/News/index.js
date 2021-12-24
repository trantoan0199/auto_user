import React from "react";
import {
  Button,
  ButtonBase,
  Card,
  Collapse,
  Container,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { URL_API } from "../../config";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#D9D9D6",
    padding: "20px",
    marginBottom: 20,
  },
}));

function News() {
  const [isNews, setIsNews] = React.useState(false);
  const [news, setNews] = React.useState([]);
  const classes = useStyles();

  const onToggleNews = () => {
    setIsNews(!isNews);
  };

  const fetchData = async () => {
    const { data } = await axios.get(`${URL_API}/news`);
    setNews(data);
  };

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.root}>
        <h3 style={{ fontSize: 35 }}>TIN TỨC</h3>
      </div>
      <Container>
        <Grid container spacing={2}>
          {news.map((e, index) => {
            return (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase>
                        <img alt={e.news} src={e.img} />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            variant="body2"
                            style={{
                              fontSize: 25,
                              marginLeft: 15,
                              textDecoration: "underline",
                            }}
                          >
                            {e.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            style={{ fontSize: 15, marginLeft: 15 }}
                          >
                            {e.date}
                          </Typography>
                          <Collapse in={isNews} collapsedSize={28}>
                            <Typography
                              variant="body2"
                              style={{ fontSize: 10, marginLeft: 10 }}
                            >
                              {e.description}
                            </Typography>
                          </Collapse>
                        </Grid>
                        <Grid item>
                          <Box display="flex" justifyContent="center" m={2}>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={onToggleNews}
                            >
                              {isNews ? "Thu Gọn" : "Xem Thêm"}
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default News;

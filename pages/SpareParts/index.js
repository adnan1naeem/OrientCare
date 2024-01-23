import { Box, Card, Divider, Grid, Typography } from "@mui/material";

import Cards from "../Products/Cards";
import Dropdown from "../Products/Dropdown";
import Filters from "../Products/Filters";
import Footer from "../footer/index";
import Header from "../../components/Header/index";
import React from "react";
import SortBy from "../Products/SortBy";
import { spareParts } from "../../constants/ArrayValues";
import styles from "../../styles/product.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Index() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Header />
      <div className={styles.ContainerProduct}>
        <img
          src={"/images/spareParts-banner.webp"}
          className={styles.ProductBannerImage}
          alt="logo"
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "1.3rem",
            flexWrap: "wrap",
          }}
        >
          {isLargeScreen && <Filters pageName={"SPARE PARTS"} />}
          <Card
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%", lg: "70%" },
              background: "none",
              boxShadow: "none",
              marginTop: "5rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    paddingRight: "5px",
                    color: "#8A8A8A",
                    fontSize: "12px",
                  }}
                >
                  Sort by:
                </Typography>
                <SortBy />
              </Grid>
              {!isLargeScreen && (
                <div style={{ zIndex: 1 }}>
                  <Dropdown />
                </div>
              )}
            </div>
            <Divider inset="none" sx={{ mt: "5px" }} />
            <Cards Array={spareParts} />
          </Card>
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default Index;

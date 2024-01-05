import React from "react";
import Box from "@mui/system/Box";
import { Typography } from "@mui/material";
const Center_Right = () => {
  return (
    <Box
      component="section"
      sx={{
        background: "#e6e6e6",
        color: "#8a8a8a",
        pl: "3%",
        pr: "4%",
        pt: "2%",
        mr: "1.5%",
        lineHeight: "1.5",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "#33cccc",
          display: "flex",
          fontWeight: 700,
          textAlign: "left",
          mb: "2%",
          fontSize: "24px",
          // width: "500px",
          fontFamily: "sans-serif",
        }}
      >
        This Warranty Does Not cover
      </Typography>
      <Typography
        variant="h3"
        sx={{
          lineHeight: 1.5,
          textAlign: "left",
          paddingLeft: "34px",
          fontSize: "12px",
          width: "450px",
          pl: "2%",
          mb: "4%",
          fontFamily: "sans-serif",
          width: "500px",
        }}
      >
        <br />
        1. Any defect because of the improper supply, electrical fluctuations,
        high/low voltage, use of substandard electrical wiring or voltage
        stabilizer and mishandling.
        <br />
        2. Labor charges, and other charges incurred for the diagnosis of
        faults, removing & installation, transportation, servicing and handling
        of defective parts or new units.
        <br />
        3.Periodical normal maintenance as required by customer including
        cleaning of indoor unit and air filters etc.
        <br />
        4. Failure, damage or repairs due to faulty/wrong installation,
        mishandling, unauthorized alteration or improper operation.
        <br />
        5. Failure to start due to voltage fluctuations, blown fuses, open
        circuit breakers or damage due to interruption of electrical services.
        <br />
        6. Failure or damage due to floods, fires, winds, lightning,
        accidents,corrosive environments and or other harmful environments
        beyond the control of OrientCare.
        <br />
        7. Usage of parts not supplied by company and damage due to use of such
        parts.
        <br />
        8. Products installed outside USA will not be covered in warranty.
        <br />
        9. Electricity or fuel cost, or increase in electricity or fuel cost
        from any reason, whatsoever, including additional or unusual use of
        supplemental electrical heat.
        <br />
        10. Any cost to replace, refill or dispose of refrigerant, including the
        refrigerant.
        <br />
        11.Any special indirect or consequential property or commercial damage
        of any nature, whatsoever. Some states or provinces do not allow the
        exclusion of incidental or consequential damages, in this case the above
        limitation may not apply to you.
      </Typography>
    </Box>
  );
};

export default Center_Right;

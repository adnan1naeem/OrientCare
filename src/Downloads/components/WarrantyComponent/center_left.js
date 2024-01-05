import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/system/Box";

const center_left = () => {
  return (
    <div>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#8a8a8a",
          pb: "5%",
          // mr: "6%",
          ml: "5%",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            paddingLeft: "20px",
            lineHeight: 1.5,
            fontSize: "12px",

            // width: "500px",
            fontFamily: "sans-serif",
          }}
        >
          OrientCare Mini Split Inverter Heat Pump Indoor Unit is manufactured
          according to quality standards and certifications. Please read
          carefully all warranty details as given below, these are against
          failure due to defect in materials or workmanship under normal use and
          maintenance of this product.
          <br />
          <br />
          1. Please register your unit within 60 days of purchase to commence
             the warranty period from the date of purchase of this unit.
          <br />
          2. If the unit is registered after 60 days the warranty period will
          commence 120 days from the date of manufacturing of the unit.
          <br />
          3. During the warranty period, if a part due to any defect is failed
          the OrientCare will provide a new or functional part, at the
          discretion of OrientCare, to replace the failed part free of cost.
          <br />
          4. To register visit www.orientcare.us
          <br />
          5. The limited warranty is subject to all provisions, conditions,
          limitations and exclusions listed below in the warranty document.
          <br />
          6. OrientCare provides 1 year parts warranty with one-time replacement
          of parts from the applicable warranty date with a new or functional
          part subject to the confirmation of technical staff. The warranty of
          parts does not include vent covers, buttons/switches and parts made of
          plastic, glass and rubber. If the Inverter Heat Pump is installed at a
          commercial application then all parts are warranted for a period of
          six (6) months from the commencement of warranty period.
          <br />
          7. Six months after the purchase of the OrientCare Inverter Heat Pump,
          the customer will have to pay the service charges.
          <br />
          8. This warranty is non-transferable and will be valid only if the
          Inverter Heat Pump is in use of the original customer (owner).
          <br />
          9. Warranty discontinues after the unit is removed from the location
          where it is originally installed.
          <br />
          10. The warranty will not be valid if the customer does not have the
          original purchase receipt.
          <br />
          11. It is the responsibility of the customer to provide proper voltage
          and check the electrical wiring before operating the OrientCare
          Inverter Heat Pump.
          <br />
          12. It is also the customer's responsibility to place and use the
          OrientCare Inverter Heat Pump as per operating instructions/manual.
          <br />
          13. The company and the customer agree that there will be no complete
          replacement of the OrientCare Inverter Heat Pump whatsoever. Only
          claims within the terms and conditions of the warranty will be
          entertained.
          <br />
          14. For warranty credit, the defective part must be returned to
          OrientCare distributor, by a state certified contractor.
          <br />
          15. The replacement part given under this warranty is only warranted
          for the unexpired portion of the warranty applying to the original
          part that was replaced.
          <br />
          16. In case of warranty claim, the company's decision will be final.
          <br />
          17. All correspondence regarding claims should be made to the head
          office of the company.
          <br />
          18. For further information, consult with the representatives of the
          company.
        </Typography>
      </Box>
    </div>
  );
};

export default center_left;

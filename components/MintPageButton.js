/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

export default function MintPageButton() {
  const ColorButton = styled(Button)(({ theme }) => ({
    /* color: theme.palette.getContrastText(purple[400]), */
    /* backgroundColor: "#222da0", */
    backgroundColor: "#b85fff",
    "&:hover": {
      /* backgroundColor: purple[600], */
      background:
        "linear-gradient(90deg, rgba(142,1,255,1) 89%, rgba(184,95,255,1) 100%)",
    },
  }));

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Link href="/mint">
          <a>
            <ColorButton
              sx={{ borderRadius: "8px", margin: "1rem 0 0 0" }}
              variant="contained"
            >
              <Box component="span" display="flex" alignItems="center">
                <Typography
                  variant="body1"
                  component="span"
                  textTransform="none"
                  margin="0 1rem 0 1rem"
                >
                  Mint Your NFT
                </Typography>
              </Box>
            </ColorButton>
          </a>
        </Link>
      </Box>
    </Box>
  );
}

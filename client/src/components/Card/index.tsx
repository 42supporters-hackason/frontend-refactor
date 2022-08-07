import React, { HTMLAttributes } from "react";
import { Box, SxProps, Theme } from "@mui/system";

interface Props extends HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>;
}

/**
 * Cardコンポーネント
 */
export const Card = ({ children, ...props }: Props) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        widht: "100%",
        height: "100%",
        px: 4,
        py: 3,
        borderRadius: 4,
        boxShadow: 3,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

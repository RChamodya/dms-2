import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import LinearWithValueLabel from "../progressBar/ProgressBar";

interface CustomCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageUrl,
  title,
  description,
}: CustomCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="80"
        image={imageUrl}
        alt="Card Image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <LinearWithValueLabel />
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
      </CardContent>
    </Card>
  );
};

export default CustomCard;

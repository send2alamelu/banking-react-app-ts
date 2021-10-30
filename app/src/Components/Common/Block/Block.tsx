import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Block() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          You have
        </Typography>
        <Typography variant="h5" component="div">
          SGD 12,482.32
        </Typography>
        <Typography variant="body2">
          in your account
        </Typography>
      </CardContent>
    </Card>
  );
}

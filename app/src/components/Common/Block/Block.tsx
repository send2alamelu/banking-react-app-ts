import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface BlockProps {
  children: React.ReactNode;
}

export default function Block(props: BlockProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}
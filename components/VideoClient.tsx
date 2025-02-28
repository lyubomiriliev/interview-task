"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const VideoClient = ({ src }: { src: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Typography variant="body2">Loading video...</Typography>;
  }

  return (
    <video width="100%" height="150" autoPlay loop muted playsInline>
      <source src={src} type="video/webm" />
    </video>
  );
};

export default VideoClient;

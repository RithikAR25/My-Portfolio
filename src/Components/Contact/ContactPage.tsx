import { useState, useEffect, useRef } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Google Maps container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Your Google Maps API key (replace with your actual key)
const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";

// Center point of the map
const mapCenter = {
  lat: -6.9175, // Example latitude (use your desired location)
  lng: 107.6191, // Example longitude (use your desired location)
};

const ContactPage = () => {
  // States to track visibility for the Google Map and Form
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null); // Ref for the Google Map
  const formRef = useRef<HTMLDivElement>(null); // Ref for the Contact Form

  // Intersection Observer for the Google Map
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsMapVisible(entry.isIntersecting); // Set true when map is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the map is visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current); // Observe the map
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  // Intersection Observer for the Contact Form
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsFormVisible(entry.isIntersecting); // Set true when form is visible
      },
      { threshold: 0.5 } // Trigger when 50% of the form is visible
    );

    if (formRef.current) {
      observer.observe(formRef.current); // Observe the form
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      {/* Content Section */}
      <Grid container spacing={2}>
        {/* Google Map Section */}
        <Grid item xs={12} md={7}>
          <Box
            ref={mapRef} // Attach ref to the map section
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              opacity: isMapVisible ? 1 : 0, // Fade in/out
              transform: isMapVisible ? "scale(1)" : "scale(0.9)", // Scale in/out
              transition: "opacity 1s ease, transform 1s ease", // Smooth animation
            }}
          >
            <LoadScript googleMapsApiKey={googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={mapCenter}
                zoom={15}
              >
                {/* Marker at the center */}
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </Box>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={5}>
          <Box
            ref={formRef} // Attach ref to the form section
            component="form"
            sx={{
              opacity: isFormVisible ? 1 : 0, // Fade in/out
              transform: isFormVisible ? "scale(1)" : "scale(0.9)", // Scale in/out
              transition: "opacity 1s ease, transform 1s ease", // Smooth animation
            }}
          >
            <Grid container spacing={3.3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter message here.."
                  name="message"
                  variant="outlined"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;

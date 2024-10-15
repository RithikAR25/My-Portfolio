import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, Button, Grid, TextField } from "@mui/material";

import { useFormik } from "formik"; // Import Formik
import * as Yup from "yup"; // Import Yup for validation
import { ToastContainer, toast } from "react-toastify"; // Import React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// Validation schema using Yup
const validationSchema = Yup.object({
  from_name: Yup.string()
    .matches(
      /^[A-Za-z ]*$/,
      "Name must not contain numbers or special characters"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactPage = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null); // Ref for the Google Map
  const formRef = useRef<HTMLFormElement>(null); // Ref for the Contact Form

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

  // Formik setup for form handling and validation
  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema, // Apply validation schema
    onSubmit: (_values, { resetForm }) => {
      if (formRef.current) {
        // Ensure formRef.current is not null
        emailjs
          .sendForm(
            "service_bdqci0d", // Replace with your actual service ID
            "template_yliq0eq", // Replace with your actual template ID
            formRef.current, // Pass the non-null form reference
            "qX9EealRbBN_hm_1s" // Your actual public key
          )
          .then(
            () => {
              toast.success("Message sent successfully!"); // Success toast
              resetForm(); // Reset the form after submission
            },
            (error) => {
              toast.error(`Failed to send message: ${error.text}`); // Error toast
            }
          );
      } else {
        toast.error("Form could not be submitted. Please try again."); // Handle null formRef case
      }
    },
  });

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
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d423.7332037545294!2d75.46474172060658!3d11.777975818392303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQ2JzQwLjgiTiA3NcKwMjcnNTMuMSJF!5e0!3m2!1sen!2sin!4v1728887746450!5m2!1sen!2sin"
                width="100%"
                height="400px"
                loading="lazy"
              ></iframe>
            </Box>
          </Box>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={5}>
          <Box
            ref={formRef} // Attach ref to the form section
            component="form"
            onSubmit={formik.handleSubmit} // Formik form submit handler
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
                  name="from_name"
                  variant="outlined"
                  value={formik.values.from_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.from_name && Boolean(formik.errors.from_name)
                  }
                  helperText={
                    formik.touched.from_name && formik.errors.from_name
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  variant="outlined"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
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
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{ color: "#111" }}
                  type="submit" // Trigger form submit
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Toast notifications */}
      <ToastContainer />
    </Box>
  );
};

export default ContactPage;

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button, Typography, Container, Alert } from '@mui/material';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      // Here you would typically send the form data to your backend
      console.log(values);
      setStatus({ success: true });
      resetForm();
    } catch (error) {
      setStatus({ success: false });
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, status }) => (
            <Form>
              {status?.success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Message sent successfully!
                </Alert>
              )}
              {status?.success === false && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Failed to send message. Please try again.
                </Alert>
              )}
              <Field
                name="name"
                as={TextField}
                label="Name"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="normal"
              />
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />
              <Field
                name="message"
                as={TextField}
                label="Message"
                multiline
                rows={4}
                fullWidth
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default ContactForm;

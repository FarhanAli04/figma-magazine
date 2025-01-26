import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './DemoSection.css';
import image1 from '../../asest/2 1.png';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required')
});

const DemoSection = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      // Handle form submission here
      console.log('Form submitted:', values);
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
    <section className="demo-section">
      <div className="demo-grid">
        {/* Left side - Astronaut Image */}
        <div className="image-container">
          <img 
            src={image1} 
            alt="Astronaut with Bike"
            className="astronaut-image" 
          />
          <div className="image-overlay"></div>
        </div>

        {/* Right side - Demo Form */}
        <div className="form-container">
          <div className="form-content">
            <h2>Evolutionize Your Bike</h2>
            <h3>Get A Free Live Demo.</h3>
            
            <Formik
              initialValues={{ name: '', email: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting, status }) => (
                <Form>
                  {status?.success && (
                    <div className="success-message">Form submitted successfully!</div>
                  )}
                  {status?.success === false && (
                    <div className="error-message">Failed to submit form. Please try again.</div>
                  )}
                  
                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={errors.name && touched.name ? 'error' : ''}
                    />
                    {errors.name && touched.name && (
                      <div className="error-text">{errors.name}</div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={errors.email && touched.email ? 'error' : ''}
                    />
                    {errors.email && touched.email && (
                      <div className="error-text">{errors.email}</div>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

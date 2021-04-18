import React from 'react';

import { Form, Field, Formik } from 'formik';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={(values: ContactFormValues) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />

          <label htmlFor="phone">Phone Number</label>
          <Field id="phone" name="phone" />

          <label htmlFor="message">Message</label>
          <Field
            id="message"
            name="message"
            as="textarea"
            className="form-textarea"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

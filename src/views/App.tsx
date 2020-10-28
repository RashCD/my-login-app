import React, { useContext, useState } from 'react';
import { Form, Formik } from 'formik';
import Card from '../components/Card';
import Input from '../components/Input';
import LoadingAnimation from '../components/LoadingAnimation';
import { LoginSchema } from '../schema/LoginSchema';
import Layout from '../components/Layout';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const initialValues = { userId: '', userPassword: '' };

function App() {
  const context = useContext(AuthContext);
  const [formFail, setFormFail] = useState('');
  const history = useHistory();

  const onSubmitForm = async (values: typeof initialValues) => {
    try {
      const response = await context?.loginUser({
        userId: values.userId,
        password: values.userPassword,
      });
      history.push(`/user/${response.userId}`);
    } catch (err) {
      setFormFail(err.message);
    }
  };

  return (
    <Layout>
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-10/12" style={{ maxWidth: 400 }}>
          <Card className="relative">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmitForm}
              validationSchema={LoginSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="px-8 pt-8">
                    <div className="h-32 w-full flex justify-center items-center text-blue-900 font-semibold">
                      <p>Single sign-on (SSO)</p>
                    </div>
                    <Input name="userId" label="User Id" />
                    <div className="py-3" />
                    <Input
                      name="userPassword"
                      label="Password"
                      type="password"
                    />
                    {formFail && (
                      <p className="text-red-600 font-semibold text-xs text-center pt-5">
                        {formFail}
                      </p>
                    )}
                    <div className="pb-24" />
                  </div>
                  <button
                    className="flex justify-center items-center w-full h-12 bottom-0 rounded-b-lg bg-blue-700 absolute focus:outline-none"
                    type="submit"
                  >
                    {isSubmitting && <LoadingAnimation className="h-full" />}
                    <p className="text-white text-base">Login</p>
                  </button>
                </Form>
              )}
            </Formik>
          </Card>
          <div className="mt-4 flex justify-center">
            <Link to="/reset-password" className="text-blue-700 underline">
              Forgot Password ?
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;

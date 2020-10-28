import React from 'react';
import { Form, Formik } from 'formik';
import Card from './components/Card';
import Input from './components/Input';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const onSubmitForm = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-bl from-teal-300 via-white to-gray-500">
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-10/12" style={{ maxWidth: 400 }}>
          <Card className="relative">
            <Formik
              initialValues={{ userId: '', userPassword: '' }}
              onSubmit={onSubmitForm}
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
            <a href="/" className="text-blue-700 underline">
              Forgot Password ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

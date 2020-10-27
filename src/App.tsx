import React, { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';

function App() {
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  return (
    <div className="h-screen w-screen bg-gradient-to-bl from-teal-300 via-white to-gray-500">
      <div className="flex w-full h-full justify-center items-center">
        <div className="w-2/5">
          <Card className="relative">
            <div className="px-8 pt-8">
              <div className="h-32 w-full flex justify-center items-center text-blue-900 font-semibold">
                <p>Single sign-on (SSO)</p>
              </div>
              <Input
                label="User Id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <div className="py-3" />
              <Input
                label="Password"
                value={userPassword}
                inputType="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <div className="pb-24" />
            </div>
            <button
              className="w-full h-12 bottom-0 rounded-b-lg bg-blue-700 absolute focus:outline-none"
              onClick={() => {}}
            >
              <p className="text-white text-base">Login</p>
            </button>
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

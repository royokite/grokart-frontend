import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpGaV5KQmFJfFBmQ2lZeVRwckU3HVdTRHRcQlxiQH5VdkNjXnxXdH0=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmJBYVF2R2BJeVRwcl9GZkwgOX1dQl9gSX9Sf0VlWXled3BWR2k=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xIdkx0RWFab1h6dFNMYFpBNQtUQF1hSn5Sd0xjX39YcHNRQmhV;OTY4NjAxQDMyMzAyZTM0MmUzMEZicTRoZytyaFArMU11Y3Z2emhwNzV2OC9TS2IwRzNxbk5jMnNjVWt5bW89;OTY4NjAyQDMyMzAyZTM0MmUzMGZMREtlT3RTVTJ3d2V4eTZXcnNXMk1LVFNIV1gwa1ZnUGNJUjA0ZVNzTXc9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWf1tpR2NbfE52flVAalxXVAciSV9jS31Td0RqWXlednRSQ2FeWA==;OTY4NjA0QDMyMzAyZTM0MmUzMGZpcVBTaEhIZzJjdGE1bHVuSU9ENVBCOFBBOWxLNUlJUlNnZHJEeVg1MGM9;OTY4NjA1QDMyMzAyZTM0MmUzMGk0MThPZFl5SmhXN2dGclpOMk0wRkJiZC91L1o0TnE1OS92cUZYQll2TnM9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xIdkx0RWFab1h6dFNMYFpBNQtUQF1hSn5Sd0xjX39YcHNQQWBV;OTY4NjA3QDMyMzAyZTM0MmUzMExzQ3pSOUFUay9HTWI4WHNaNzM5U09wRHJrcCtRVnpnaUUzVUFsWjhWT1E9;OTY4NjA4QDMyMzAyZTM0MmUzMG1oZDBPOUNqRm83ZTNJSEQ3TzRGSXMvSUl2TmNTcVo0bE12WkpwVnhDT0k9;OTY4NjA5QDMyMzAyZTM0MmUzMGZpcVBTaEhIZzJjdGE1bHVuSU9ENVBCOFBBOWxLNUlJUlNnZHJEeVg1MGM9');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

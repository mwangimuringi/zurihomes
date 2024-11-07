import { useState } from 'react';
import Link from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth/signup', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.success === false) {
     setError(data.message);
     setLoading(false);
     return;
    }
    setLoading(false);
    console.log(data);
  };
  console.log('submitted');
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="password"
          placeholder="Username"
          className="border rounded-lg p-3"
          id="password"
        />
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link href="/sign-in">
          <span className="text-blue-500">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

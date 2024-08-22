import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-primary animate-slideIn">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-highlight text-white px-4 py-2 rounded-lg shadow-md hover:bg-accent transition duration-300"
        >
          Logout
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 animate-fadeIn">
          <h2 className="text-xl font-semibold text-primary mb-4">Manage Feedback</h2>
          <p className="text-textSecondary">View, approve, or delete user  here.</p>
          <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-highlight transition duration-300">
            Go to Testimonials
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 animate-fadeIn">
          <h2 className="text-xl font-semibold text-primary mb-4">User Management</h2>
          <p className="text-textSecondary">Add, remove, or manage users here.</p>
          <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-highlight transition duration-300">
            Manage Users
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 animate-fadeIn">
          <h2 className="text-xl font-semibold text-primary mb-4">System Settings</h2>
          <p className="text-textSecondary">Adjust application settings and preferences here.</p>
          <button className="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-highlight transition duration-300">
            Settings
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

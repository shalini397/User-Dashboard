import React from 'react';

const ModalComponent = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-md"
        >
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4">User Details</h2>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Name:</span> {user.name}</p>
          <p><span className="font-medium">Username:</span> {user.username}</p>
          <p><span className="font-medium">Email:</span> {user.email}</p>
          <p><span className="font-medium">Phone:</span> {user.phone}</p>
          <p><span className="font-medium">Website:</span> {user.website}</p>
          <p><span className="font-medium">Company:</span> {user.company?.name}</p>
          <p><span className="font-medium">Catchphrase:</span> "{user.company?.catchPhrase}"</p>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

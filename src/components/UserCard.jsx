import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import profileImage from '../assets/profileImage.jpeg'
import { IoCall } from 'react-icons/io5'
import UserDetailsDialog from './UserDetailsDialog'

const UserCard = ({ user }) => {
  return (
    <div className="w-full p-6 bg-white border rounded-lg shadow-lg">
      <div>
        <div className="flex items-center justify-center p-2 border rounded-full w-fit h-fit">
          <img
            src={profileImage}
            alt="Profile picture"
            className="w-16 h-16 rounded-full"
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold">
          {user.first_name} {user.last_name}
        </h1>
        <div className="flex items-center mb-4 text-gray-600 gap-x-2">
          <span>
            <IoLocationSharp size={20} />
          </span>
          <span className="font-medium">{user.city}</span>
        </div>
      </div>
      <hr className="w-full mb-4" />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-x-2">
            <span>
              <IoCall size={20} />
            </span>
            <div className="text-lg font-semibold">{user.contact_number}</div>
          </div>
          <div className="mb-4 text-sm font-medium text-gray-400">
            Available on phone
          </div>
        </div>

        <UserDetailsDialog user={user} />
      </div>
    </div>
  )
}

export default UserCard

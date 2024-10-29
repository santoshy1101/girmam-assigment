import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import profileImage from '../assets/profileImage.jpeg'

const ProfileDetails = ({ user }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Fetch Details</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fetch Details</DialogTitle>
            <DialogDescription>
              Here are the details of following employee.
            </DialogDescription>
          </DialogHeader>
          <div className="font-medium text-black">
            <p>
              {' '}
              Name: {user.first_name} {user.last_name}
            </p>
            <p> Location: {user.city}</p>
            <p> Contact Number: {user.contact_number}</p>
          </div>

          <div>
            <p className="font-medium text-black">Profile Image:</p>
            <img src={profileImage} alt="profile photo" className="w-32 h-40" />
          </div>
          <DialogFooter className="">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProfileDetails

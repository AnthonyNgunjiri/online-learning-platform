import React from 'react'

const Profile = () => {
  return (
   <div>
 <div className="">
       
        <div className="">
            <div className="">
                <img className="" src="" alt="User's profile picture"/>
                <div>
                    <h2 className="">John Doe</h2>
                    <p className="">john.doe@example.com</p>
                    <p className="">Member since: January 2021</p>
                </div>
            </div>
        </div>

       
        <div >
            <h3 className="">My Courses</h3>
            <div className="space-y-4">
                <div>
                    <p className="">Course 1</p>
                    <div >
                        <div></div>
                    </div>
                </div>
                <div>
                    <p >Course 2</p>
                    <div >
                        <div className=""></div>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Course 3</p>
                    <div >
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            <h3 className="">Achievements</h3>
            <div className="flex space-x-4">
                <div className="text-center">
                    <img className="" src="" alt="Badge 1"/>
                    <p className="text-sm">Badge 1</p>
                </div>
                <div className="text-center">
                    <img className="" src="" alt="Badge 2"/>
                    <p className="text-sm">Badge 2</p>
                </div>
                <div className="text-center">
                    <img className="" src="" alt="Badge 3"/>
                    <p className="text-sm">Badge 3</p>
                </div>
            </div>
        </div>

      
        <div>
            <h3 >Settings</h3>
            <div className="space-y-4">
                <button >Change Password</button>
                <button >Update Profile Info</button>
            </div>
        </div>
    </div>
   </div>

  )
}

export default Profile;

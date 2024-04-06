import React from 'react'

const UserSideBar = () => {
  return (
    <div className="w-1/3 border border-black py-4 px-4 m-4 rounded-xl flex flex-col justify-start items-start">
      <div className="flex items-start justify-start">
        <div>
          <img
            className="h-[5rem]"
            src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="text-2xl text-slate-800 px-2 font-bold">
            Here is User Name
          </div>
          <div className="text-lg text-purple-600 px-2 -mt-2 font-semibold">
            Here is user designation
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-slate-800 mt-4">Education</div>
      <div>
        <div className="text-lg tracking-tight">Users Institute Goes Here</div>
        <div className="text-sm tracking-tighter text-slate-500 -mt-2">
          Users Degree Goes Here
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-2xl font-bold text-slate-800 mt-4">
          Linked Account
        </h1>
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-lg tracking-tight">GitHub</h2>
            <div className="text-sm tracking-tighter text-slate-500 -mt-2">
              User id is here{" "}
            </div>
          </div>
          <div>
            <img
              className="h-[2rem]"
              src="https://edug.in/panel/head_admin/School/school_head/first_photo/DEMO59167.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <div className="p-2 w-3/5 text-lg rounded-full text-center bg-[#7346F1] text-white">
          Go to Dashboard
        </div>
      </div>
    </div>
  );
}

export default UserSideBar
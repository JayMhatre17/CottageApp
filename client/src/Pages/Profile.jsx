import React, { useRef, useState } from 'react';

const Profile = () => {
  const menuRef = useRef();
  const imgRef = useRef();
  const [open, setOpen] = useState(false);
  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  const Logout = () => {
    localStorage.removeItem('isLogedIn');
    localStorage.removeItem('user');
  };
  return (
    <div>
      <div className="static">
        <img
          ref={imgRef}
          onClick={() => {
            setOpen(!open);
          }}
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="profile"
          className="h-6 w-6 object-cover border border-gray-400 rounded-full"
        />
      </div>
      <div className="relative block z-50">
        {open && (
          <div
            ref={menuRef}
            className="bg-white p-4 w-32 m-2 shadow-lg absolute right-0"
          >
            <ul>
              <li
                onClick={() => {
                  setOpen(false);
                }}
                className="text-black p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
              >
                Profile
              </li>
              <li
                onClick={() => Logout()}
                className="text-black p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

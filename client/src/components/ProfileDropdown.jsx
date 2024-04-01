/* eslint-disable react/prop-types */
import { Dropdown, DropdownDivider } from 'flowbite-react';
import { HiLogout } from 'react-icons/hi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { RiFileList2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function ProfileDropdown({ userInfo, signOut }) {
  return (
    <Dropdown
      inline
      placement="bottom"
      label={
        <div className="font-medium">
          Hi👋, <span className="capitalize">{userInfo.firstName}</span>
        </div>
      }
      size="lg"
    >
      <Dropdown.Header>
        <span className="block truncate text-sm font-medium">
          {userInfo.email}
        </span>
      </Dropdown.Header>
      {userInfo.isAdmin && (
        <>
          <div className="flex flex-row justify-center align-middle gap-1 mt-3 mb-1">
            <MdOutlineAdminPanelSettings className="text-base"></MdOutlineAdminPanelSettings>
            <span className="block font-medium text-sm">Admin Controls</span>
          </div>
          <Link to="/bookingslist">
            <Dropdown.Item icon={RiFileList2Fill}>Bookings</Dropdown.Item>
          </Link>
          <DropdownDivider></DropdownDivider>
        </>
      )}
      <Dropdown.Item icon={HiLogout} onClick={signOut}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}

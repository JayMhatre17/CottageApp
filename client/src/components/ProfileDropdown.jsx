/* eslint-disable react/prop-types */
import { Dropdown } from 'flowbite-react';
import { HiLogout } from 'react-icons/hi';

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
      <Dropdown.Item icon={HiLogout} onClick={signOut}>
        Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}

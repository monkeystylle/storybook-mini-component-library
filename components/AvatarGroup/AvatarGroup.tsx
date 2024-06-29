import React from 'react';
import { cn } from '@/lib/utils';
import Avatar from '../Avatar';

export interface User {
  uid: string;
  username: string;
  avatarImgUrl?: string;
}

interface AvatarGroupProps {
  /**
   * array of User to for the Avatar Group
   */
  users: User[];
}

const AvatarGroup = (props: AvatarGroupProps) => {
  const { users } = props;

  const avatarWrapperClass = cn(
    'p-0.5 bg-white rounded-full',
    '[&:first-child]:z-40',
    '[&:nth-child(2)]:z-30',
    '[&:nth-child(3)]:z-20',
    '[&:last-child]:z-10',
    '[&:not(:first-child)]:-ml-2.5'
  );

  const numberedAvatarClass = cn(
    'flex items-center justify-center ',
    'bg-gray-200 color-[#637381]',
    ' rounded-full h-8 w-8 min-w-8 text-base'
  );

  // calculate the count of extra users beyond the third
  const numberedUsersCount = users.length > 4 ? users.length - 3 : 0;

  // determine the number of avatars to display
  const avatarsToShow = numberedUsersCount > 0 ? 3 : users.length;

  return (
    <div className="isolate flex items-center w-fit ">
      {/* if there are more than four users, show the "+N" avatar */}
      {numberedUsersCount > 0 && (
        <div className={avatarWrapperClass}>
          <div className={numberedAvatarClass}>
            <div className="-ml-[2px]">+{numberedUsersCount}</div>
          </div>
        </div>
      )}

      {/* show the first 3 users avatar if there are more than 4 users,
          else show avatars of all users */}
      {users?.slice(0, avatarsToShow).map(user => (
        <div key={user.uid} className={avatarWrapperClass}>
          <Avatar imageUrl={user.avatarImgUrl} userName={user.username} />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;

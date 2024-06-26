import React from 'react';
import Avatar from '../Avatar/Avatar';

type AvatarWithOnlineBadgeProps = {
  /**
   * size of the Avatar
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * sets the user avatar image
   */
  imageUrl?: string | null;
  /**
   * user name that will be used to get the 1st Letter for Avatar Fallback
   */
  userName: string;
  /**
   * indicator if user is Online
   */
  isOnline: boolean;
};

const AvatarWithOnlineBadge = (props: AvatarWithOnlineBadgeProps) => {
  const { size = 'medium', imageUrl, userName, isOnline } = props;

  return (
    <div className="relative w-fit">
      <Avatar size={size} imageUrl={imageUrl} userName={userName} />

      {/* badge */}
      {isOnline && (
        <div className="absolute right-[-2px] bottom-[-2px] grid place-content-center w-3 h-3 min-w-3 rounded-full bg-white">
          <div className="bg-green-600 w-2 h-2 min-w-2 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default AvatarWithOnlineBadge;

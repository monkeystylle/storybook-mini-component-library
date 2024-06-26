import * as React from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import AvatarPic1 from '../../public/assets/avatar.jpg';
import { getFirstLetterFromString } from './Avatar.helpers';

interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
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
}

const avatarContainer = cva(
  [
    'flex items-center justify-center relative ',
    'bg-gray-300 text-[white]',
    'overflow-hidden rounded-full uppercase',
  ],
  {
    variants: {
      size: {
        small: 'h-6 w-6 min-w-6 text-sm  ',
        medium: 'h-8 w-8 min-w-8 text-base ',
        large: 'h-10 w-10 min-w-10 text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const Avatar = (props: AvatarProps) => {
  const { size, imageUrl, userName, ...rest } = props;

  return (
    <div className={cn(avatarContainer({ size }))}>
      {imageUrl ? (
        <Image src={imageUrl} alt="avatar pic" fill />
      ) : (
        getFirstLetterFromString(userName)
      )}
    </div>
  );
};

export default Avatar;

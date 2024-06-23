import React from 'react';
import { FolderLock, Star } from 'lucide-react';
import { getInverseRating, range } from './StarRating.helpers';

type StarRatingProps = {
  /**
   * rating given ( from 0 min to max 5)
   */
  rating: number;
};

const StarRating = (props: StarRatingProps) => {
  const { rating } = props;

  // Normalize the rating to be within 0 to 5
  const clampedRating = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex gap-2">
      {/* active star */}
      <div className="flex gap-2 ">
        {range(clampedRating).map(num => (
          <Star key={num} color="#2563EB" size={32} fill="#2563EB" />
        ))}
      </div>
      {/* inactive star */}
      <div className="flex gap-2">
        {range(getInverseRating(clampedRating)).map(num => (
          <Star key={num} color="#E5E7EB" size={32} fill="#E5E7EB" />
        ))}
      </div>
    </div>
  );
};

export default StarRating;

import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RatingProps {
  score: number;
  reviews: number;
  platform: string;
}

const Rating = ({ score, reviews, platform }: RatingProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-1 mb-1">
        <Star className="text-darkGreen" size={20} fill="currentColor" />
        <span className="text-lg font-semibold text-darkBrown">{score}/5</span>
      </div>
      <p className="text-sm text-lightBrown">
        {t('ratings.on')} +{reviews.toLocaleString()} {t('ratings.ratings')}
      </p>
      <p className="text-xs text-darkBrown mt-1">{platform}</p>
    </div>
  );
};

export default Rating;
import {
  RatingsContainer,
  RatingCard,
  RatingHeader,
  ProfileName,
  ScoreDisplay,
  RatingStats,
  RatingValue,
  RatingCount,
  NoRatings
} from './styles';
import { StarRating } from '../StarRating';

export function RatingsList({ ratings }) {
  if (!ratings || ratings.length === 0) {
    return <NoRatings>Nenhuma avaliação disponível.</NoRatings>;
  }

  const parseRatingStats = (statsString) => {
    if (!statsString) return null;
    try {
      const stats = JSON.parse(statsString);
      return {
        average: parseFloat(stats.average_score),
        total: stats.total_ratings
      };
    } catch (e) {
      return null;
    }
  };

  return (
    <RatingsContainer>
      <h2>Avaliações ({ratings.length})</h2>
      {ratings.map((rating) => {
        const stats = rating.profile.ratingStats ? 
          parseRatingStats(rating.profile.ratingStats) : null;

        return (
          <RatingCard key={rating.id}>
            <RatingHeader>
              <ProfileName>{rating.profile.name}</ProfileName>
              {rating.profile.ratings?.map((r, index) => (
                <ScoreDisplay key={index} $score={r.score}>
                  {r.scoreDisplay}
                </ScoreDisplay>
              ))}
            </RatingHeader>
            {stats && (
              <RatingStats>
                Média geral:
                <RatingValue>{stats.average.toFixed(1)}</RatingValue>
                <StarRating rating={stats.average} />
                <RatingCount>({stats.total} avaliações)</RatingCount>
              </RatingStats>
            )}
          </RatingCard>
        );
      })}
    </RatingsContainer>
  );
} 
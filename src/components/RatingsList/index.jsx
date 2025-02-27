import {
  RatingsContainer,
  RatingCard,
  RatingHeader,
  ProfileInfo,
  ProfileName,
  ScoreDisplay,
  RatingStats,
  RatingValue,
  RatingCount,
  NoRatings,
  EventRating,
  Description,
  RatingHistory,
  HistoryTitle
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

  const getScoreNumber = (score) => {
    return parseInt(score.split('_')[1]);
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
              <ProfileInfo>
                <ProfileName>{rating.profile.name}</ProfileName>
                <StarRating rating={getScoreNumber(rating.score)} />
              </ProfileInfo>
              <ScoreDisplay $score={rating.score}>
                {getScoreNumber(rating.score)}/5
              </ScoreDisplay>
            </RatingHeader>

            <EventRating>
              {rating.description && (
                <Description>"{rating.description}"</Description>
              )}
            </EventRating>

            {stats && (
              <>
                <RatingStats>
                  <RatingValue>Média geral: {stats.average.toFixed(1)}</RatingValue>
                  <StarRating rating={stats.average} />
                  <RatingCount>({stats.total} avaliações)</RatingCount>
                </RatingStats>

                <RatingHistory>
                  <HistoryTitle>Histórico de avaliações:</HistoryTitle>
                  {rating.profile.ratings.map((r, index) => (
                    <ScoreDisplay key={index} $score={r.score}>
                      {r.scoreDisplay}
                    </ScoreDisplay>
                  ))}
                </RatingHistory>
              </>
            )}
          </RatingCard>
        );
      })}
    </RatingsContainer>
  );
} 
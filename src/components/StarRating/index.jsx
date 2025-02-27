import { StarContainer, Star } from './styles';

export function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <StarContainer>
      {[...Array(totalStars)].map((_, index) => (
        <Star key={index} $filled={index < filledStars}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
} 
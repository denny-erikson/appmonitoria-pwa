import styled from 'styled-components';

export const RatingsContainer = styled.div`
  margin-top: 2rem;
`;

export const RatingCard = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e9ecef;
`;

export const RatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ProfileName = styled.h3`
  color: #495057;
  font-size: 1.1rem;
  margin: 0;
`;

export const ScoreDisplay = styled.span`
  background: ${props => {
    const score = parseInt(props.$score.split('_')[1]);
    if (score >= 4) return '#4CAF50';
    if (score >= 3) return '#FFC107';
    return '#F44336';
  }};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

export const RatingStats = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RatingValue = styled.span`
  font-weight: 600;
  color: #495057;
`;

export const RatingCount = styled.span`
  color: #6c757d;
  font-size: 0.85rem;
`;

export const NoRatings = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6c757d;
  background: #f8f9fa;
  border-radius: 8px;
  margin-top: 1rem;
`;

export const EventRating = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Description = styled.p`
  color: #666;
  font-style: italic;
  margin: 0.5rem 0;
  font-size: 0.95rem;
`;

export const RatingHistory = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

export const HistoryTitle = styled.span`
  color: #666;
  font-size: 0.9rem;
  margin-right: 0.5rem;
`;
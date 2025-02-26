import { useState, useCallback } from 'react';
import { useEvents } from '../../contexts/EventContext';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  EventsContainer,
  FiltersContainer,
  FilterActions,
  ListContainer,
  Input,
  Select,
  EventCard,
  EventTitle,
  EventDate,
  LoadingMessage,
  ErrorMessage,
  ClearFiltersButton,
  PaginationContainer,
  PaginationInfo,
  PaginationControls,
  PaginationButton,
  VirtualizedListContainer,
  EventDaily
} from './styles';
import { useNavigate } from 'react-router-dom';

export function EventList() {
  const { 
    events, 
    loading, 
    error, 
    hasNextPage, 
    page,
    loadMore,
    loadPrevious,
    totalCount,
    filters,
    updateFilters 
  } = useEvents();

  const [searchTimeout, setSearchTimeout] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    // Debounce para a busca
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchTimeout(setTimeout(() => {
      updateFilters({ name: value });
    }, 300));
  };

  const handleDateFilter = (type, value) => {
    updateFilters({ [type]: value });
  };

  const handleSort = (value) => {
    updateFilters({ orderBy: value });
  };

  const clearFilters = () => {
    updateFilters({
      name: '',
      startDate: '',
      endDate: '',
      orderBy: ''
    });
    // Limpar o input de busca
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) searchInput.value = '';
  };

  const hasActiveFilters = useCallback(() => {
    return filters.name || filters.startDate || filters.endDate || filters.orderBy;
  }, [filters]);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const isItemLoaded = (index) => !hasNextPage || index < events.length;

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const Item = ({ index, style }) => {
    if (!isItemLoaded(index)) {
      return (
        <div style={style}>
          <EventCard>Carregando...</EventCard>
        </div>
      );
    }

    const event = events[index];
    return (
      <div style={style}>
        <EventCard onClick={() => handleEventClick(event.id)}>
          <EventTitle>{event.name}</EventTitle>
          <EventDate>
            De {formatDate(event.startDate)} até {formatDate(event.endDate)}
          </EventDate>
          <EventDaily daily={event.daily}>
            {event.daily ? 'Diário' : 'Não Diário'}
          </EventDaily>
        </EventCard>
      </div>
    );
  };

  return (
    <EventsContainer>
      <FiltersContainer>
        <Input
          type="text"
          placeholder="Buscar por nome..."
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Input
          type="date"
          value={filters.startDate}
          onChange={(e) => handleDateFilter('startDate', e.target.value)}
        />
        <Input
          type="date"
          value={filters.endDate}
          onChange={(e) => handleDateFilter('endDate', e.target.value)}
        />
        <Select
          value={filters.orderBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Ordenar por</option>
          <option value="name">Nome</option>
          <option value="startDate">Data de Início</option>
          <option value="endDate">Data de Fim</option>
        </Select>
        <FilterActions>
          <ClearFiltersButton
            onClick={clearFilters}
            disabled={!hasActiveFilters()}
          >
            Limpar Filtros
          </ClearFiltersButton>
        </FilterActions>
      </FiltersContainer>

      <ListContainer>
        {loading && events.length === 0 ? (
          <LoadingMessage>Carregando eventos...</LoadingMessage>
        ) : (
          <>
            <VirtualizedListContainer>
              <AutoSizer>
                {({ height, width }) => (
                  <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={totalCount}
                    loadMoreItems={loadMore}
                  >
                    {({ onItemsRendered, ref }) => (
                      <List
                        height={height}
                        width={width}
                        itemCount={totalCount}
                        itemSize={120}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                      >
                        {Item}
                      </List>
                    )}
                  </InfiniteLoader>
                )}
              </AutoSizer>
            </VirtualizedListContainer>

            <PaginationContainer>
              <PaginationInfo>
                Mostrando {page * 10 + 1} - {Math.min((page + 1) * 10, totalCount)} de {totalCount} eventos
              </PaginationInfo>
              <PaginationControls>
                <PaginationButton
                  onClick={loadPrevious}
                  disabled={loading || page === 0}
                >
                  Anterior
                </PaginationButton>
                <PaginationButton
                  onClick={loadMore}
                  disabled={loading || !hasNextPage}
                >
                  {loading ? 'Carregando...' : 'Próxima'}
                </PaginationButton>
              </PaginationControls>
            </PaginationContainer>
          </>
        )}
      </ListContainer>
    </EventsContainer>
  );
} 
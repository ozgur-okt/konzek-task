import { ApolloError } from '@apollo/client';
import { Character } from './Character';

export interface SearchedCharactersProps {
    loadingItem: boolean;
    errorItem: ApolloError | undefined;
    searchedItem: {
        characters: {
            results: Character[];
        };
    } | null;
};

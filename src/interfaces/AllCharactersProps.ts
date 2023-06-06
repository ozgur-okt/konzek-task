import { ApolloError } from '@apollo/client';
import { Character } from './Character';

export interface AllCharactersProps {
    loading: boolean;
    error: ApolloError | undefined;
    data: {
        characters: {
            results: Character[];
        };
    } | null;
};
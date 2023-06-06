import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
    query GetCharacter($name: String!) {
        characters(filter:{name: $name}) {
            results {
                id,
                name,
                image
            }
        }
    }
`;

export const useCharacter = (name: any) => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { name }
    });
    return { loading, error, data };
};
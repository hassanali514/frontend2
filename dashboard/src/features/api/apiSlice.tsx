import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { candidateData } from "../../types/candidate.d"


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/' }),
    tagTypes:['Candidate'],
    refetchOnMountOrArgChange: true,
    endpoints: (builder) => ({
        getCandidate: builder.query<candidateData[], undefined>({
            query: () => `candidates`,
            providesTags: ['Candidate']
        }),
        addCandidate: builder.mutation<candidateData, undefined>({
            query: (data) => ({
                url: 'candidate/new',
                method: 'POST',
                body: data,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }),
        deleteCandidate: builder.mutation<undefined, {id:String}>({
            query: ({ id }) => ({
                url: `/candidate/delete/${id}`,
                method: 'DELETE',
                body:id
            }),
            invalidatesTags: ['Candidate']
        })

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCandidateQuery, useAddCandidateMutation, useDeleteCandidateMutation } = apiSlice
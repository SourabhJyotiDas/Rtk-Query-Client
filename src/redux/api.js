import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({

  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/",
  }),
  tagTypes: ["Posts", "Loaduser"],
  endpoints: (builder) => ({

    // Api For Login User
    login: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Loaduser"]
    }),

    // Api For Logout User
    logout: builder.mutation({ query: () => "logout", invalidatesTags: ["Loaduser"] }),

    // Api For Register User
    register: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Loaduser"]
    }),


    loadUser: builder.query({ query: () => "me", providesTags: ["Loaduser"] }),

    // Notes Realted

    // For all notes
    getAllNotes: builder.query({ query: () => "posts", providesTags: ["Posts"] }),

    notedetails: builder.query({ query: (id) => `${id}` }),

    // For Creating notes
    createNote: builder.mutation({
      query: (data) => ({
        url: "create",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Posts"]
    }),


    // For Editing notes
    editNote: builder.mutation({
      query: (data) => ({
        url: `${data.id}`,
        method: "PUT",
        body: data
      }),
      // invalidatesTags: ["Posts"]
    }),


    // For Deleting
    deleteNote: builder.mutation({
      query: (data) => ({
        url: `${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"]
    }),


    // For Completeing NOte
    isCompleted: builder.mutation({
      query: (id) => ({
        url: `completed/${id}`,
      }),
      invalidatesTags: ["Posts"]
    }),

  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useLoadUserQuery, useGetAllNotesQuery, useCreateNoteMutation, useDeleteNoteMutation, useEditNoteMutation, useNotedetailsQuery , useIsCompletedMutation } = myApi;

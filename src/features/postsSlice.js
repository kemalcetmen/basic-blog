import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const { data } = await axios.get(url);
  return data
})
export const deleteOnePost = createAsyncThunk("deleteOnePost", async (id) => {
  const response = await axios.delete(url + `/${id}`);
  if(response.status===200) return id

})
export const updateOnePost = createAsyncThunk("updateOnePost", async (newPost) => {
  const response = await axios.put(url + `/${newPost.id}`);
  if(response.status===200) return newPost
})
export const createOnePost = createAsyncThunk("createOnePost", async (newPost) => {
  const response = await axios.post(url);
  newPost.id = response.data.id
  if(response.status===201) return newPost
})

const initialState = {
  posts: [],
  loading: false,
  error: "",
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching posts data";
    })
    builder.addCase(deleteOnePost.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    builder.addCase(deleteOnePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post, i) => post.id !== action.payload.id)
    })
    builder.addCase(deleteOnePost.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching posts data";
    })
    builder.addCase(updateOnePost.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    builder.addCase(updateOnePost.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.posts.findIndex((player) => player.id === action.payload.id)
      state.posts[index] = action.payload
    })
    builder.addCase(updateOnePost.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching posts data";
    })
    builder.addCase(createOnePost.pending, (state) => {
      state.loading = true;
      state.error = "";
    })
    builder.addCase(createOnePost.fulfilled, (state, action) => {
      state.loading = false;
      let unique = false
      let newId = action.payload.id
      while(unique ===false) {
        // eslint-disable-next-line no-loop-func
        let sameId = state.posts.find(post => post.id === newId)
        if(!sameId) {
          unique = true
        }else {
          newId +=1
        }
      }
      action.payload.id = newId
      state.posts.push(action.payload);
    })
    builder.addCase(createOnePost.rejected, (state) => {
      state.loading = false;
      state.error = "Error fetching posts data";
    })
  },
});

export default counterSlice.reducer;

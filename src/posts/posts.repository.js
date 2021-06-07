import axios from "axios";

export class PostsRepository {
  async getAllPosts() {
    const allPosts = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return allPosts;
  }
}

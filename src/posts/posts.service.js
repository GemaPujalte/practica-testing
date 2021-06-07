import { PostsRepository } from "./posts.repository";

export class PostsService {
  constructor() {
    this.repository = new PostsRepository();
  }
  async getPosts() {
    return await this.repository.getAllPosts();
  }
}

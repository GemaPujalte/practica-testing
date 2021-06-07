import { PostsRepository } from "./posts.repository";
import { PostsService } from "./posts.service";
import { POSTS } from "../../fixtures/posts.js";

jest.mock("./posts.repository");

describe("Posts service", () => {
  beforeEach(() => {
    PostsRepository.mockClear();
  });
  it("should get posts", async () => {
    PostsRepository.mockImplementation(() => {
      return {
        getAllPosts: () => {
          return POSTS;
        },
      };
    });

    const service = new PostsService();
    const posts = await service.getPosts();
    expect(posts.data.length).toEqual(20);
  });
});

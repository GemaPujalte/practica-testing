import axios from "axios";
import { POSTS } from "../../fixtures/posts";
import { PostsRepository } from "./posts.repository";
jest.mock("axios");

describe("Posts Repository", () => {
  beforeEach(() => {
    axios.mockClear();
  });

  it("should get all posts", async () => {
    axios.get = jest.fn().mockResolvedValue(POSTS);

    const repository = new PostsRepository();
    const result = await repository.getAllPosts();
    expect(result.data.length).toEqual(20);
  });
});

export interface IPost {
  postID: number,
  authorID: number,
  authorName: string,
  title: string,
  content: string,
  createdAt: Date,
  updatedAt: Date,
  isLiked: boolean,
  likes: number
}
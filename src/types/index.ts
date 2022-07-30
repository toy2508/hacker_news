import View from "../core/view";

export interface Store {
  currentPage: number;
  feeds: NewsFeed[];
}

export interface News {
  id: number;
  time_ago: string;
  title: string;
  url: string;
  user: string;
  content: string;
}

export interface NewsFeed extends News {
  comments_count: number;
  point: number;
  read?: boolean;
}

export interface NewsDetail extends News {
  comments: NewsComment[];
}

export interface NewsComment extends News {
  comments: NewsComment[];
  level: number;
}

export interface RouteInfo {
  path: string;
  page: View;
}

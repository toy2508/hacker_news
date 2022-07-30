import { NewsFeed } from "./types";

export default class Store {
  private feeds: NewsFeed[];
  private _currentPage: number;
  private _maxPage: number;
  private _pageUnit: number;
  constructor() {
    this.feeds = [];
    this._currentPage = 1;
    this._pageUnit = 10;
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(page: number) {
    this._currentPage = page;
  }

  set maxPage(maxPage: number) {
    this._maxPage = maxPage;
  }

  get pageUnit(): number {
    return this._pageUnit;
  }

  get nextPage(): number {
    this._maxPage =
      this.feeds.length / this._pageUnit +
      (this.feeds.length % this._pageUnit > 0 ? 1 : 0);

    return this._currentPage == this._maxPage
      ? this._maxPage
      : this._currentPage + 1;
  }

  get prevPage(): number {
    return this._currentPage > 1 ? this._currentPage - 1 : 1;
  }

  get numberOfFeed(): number {
    return this.feeds.length;
  }

  get hasFeeds(): boolean {
    return this.feeds.length > 0;
  }

  get feedLength(): number {
    return this.feeds.length;
  }

  getAllFeeds(): NewsFeed[] {
    return this.feeds;
  }

  getFeed(position: number): NewsFeed {
    return this.feeds[position];
  }

  setFeeds(feeds: NewsFeed[]): void {
    this.feeds = feeds.map((feed) => ({
      ...feed,
      read: false,
    }));
  }

  makeRead(id: number): void {
    const feed = this.feeds.find((feed: NewsFeed) => feed.id == id);
    if (feed) {
      feed.read = true;
    }
  }
}

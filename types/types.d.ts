type Session = {
  user: User | null;
};

type User = {
  id: number;
  name: string;
  username: string;
};

type Albums = {
  userId: number;
  id: number;
  title: string;
}[];

type AlbumDetail = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type VoidFunction = () => void;

type IdVoidFunction = (id: number) => void;

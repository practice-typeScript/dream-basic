// map
// 기존의 있는 타입들을 이용하면서 조금 다른 타입으로 변경하는 것을 말한다.

{
  type Video = {
    title: string;
    author: string;
    descrtion: string;
  };

  // [1, 2].map((item) => item * item); // [1,4]
  // 재사용을 위해 사용한다.
  // P in keyof T -> 메인타입(T)으로 들어온 type을 돌면서 T의 키와 값을 생성한다. // for...in
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]?: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videos: VideoOptional = {
    title: 'ss',
    author: 'gg',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'ellie',
  };

  // 일일히 새로 만들어주고 나중에 변경사항이 있을경우 하나하나 갱신해야한다.
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}

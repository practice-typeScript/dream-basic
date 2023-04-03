// pick 반대로 원하는 것만 뺄 수 있다.

// pick은 원하는 키와 값만을 추가할 수 있다.
// in keyof는 전달받은 오브젝트의 키를 모두 순회하며 새로 만든다면
// P in K 는 P가 K와 같은지 확인하고 맞다면 추가한다는 뜻인듯 하다.

{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetadata = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https//..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}

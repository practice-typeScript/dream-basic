{
  type ToDo = {
    title: string;
    description: string;
  };

  // 타입스크립트 개발자들이 Readonly<> 같은 툴을 이미 만들어 놓았다.
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'a'
  }
}

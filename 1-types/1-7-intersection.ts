{
  /**
   * Intersection Types: And
   * 모든 property를 정해줘야 한다.
   * 하나만 선택하는 union과는 다르다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}

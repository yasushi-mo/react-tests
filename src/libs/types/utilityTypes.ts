type ToDo = {
  title: string;
  description: string;
};

export type PartialToDo = Partial<ToDo>;

type ToDoOptional = {
  title: string;
  description?: string;
};

export type RequiredToDo = Required<ToDoOptional>;

export type ReadonlyToDo = Readonly<ToDo>;

export const toDo: ReadonlyToDo = {
  title: "cleaning",
  description: "clean my room",
};

// toDo.description = "clean bathroom";

type Obj = {
  readonly toDo: ToDo;
};

const Object: Obj = {
  toDo: {
    title: "cleaning",
    description: "clean my room",
  },
};

Object.toDo.description = "clean bathroom";

// Object.toDo = {
//   title: "shopping",
//   description: "buy tomato",
// };

type Member = "Wyatt" | "Billy";

type RecordToDo = Record<Member, ToDo>;

const toDos: RecordToDo = {
  Wyatt: {
    title: "cleaning",
    description: "clean my room",
  },
  Billy: {
    title: "shopping",
    description: "buy tomato",
  },
};

console.log(toDos);

export type ToDoA = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
};

export type OmitToDo = Omit<ToDo, "title" | "description">;

export type PickToDo = Pick<ToDo, "title" | "description">;

export type ToDoB = "cleaning" | "shopping" | "washing" | "packing";

// export type ExcludeToDo = Exclude<ToDoB, "washing" | "cooking">;

// type ToDo =
//   | { title: "cleaning"; description: "clean my room" }
//   | { title: "shopping"; description: "buy tomato" }
//   | { title: "washing"; description: "wash t-shirt" }
//   | { title: "cooking"; description: "cook dinner" };

// type ExcludeToDo = Exclude<
//   ToDo,
//   | { title: "washing"; description: "wash t-shirt" }
//   | { title: "cooking"; description: "cook dinner" }
// >;

// type ToDo = "cleaning" | "shopping" | "washing" | "cooking";

// export type ExtractToDo = Extract<ToDo, "washing" | "cooking">;

// export type NoInferToDo = NoInfer<ToDo>;

// const myToDo: ToDo[] = ["cleaning", "shopping", "washing", "cooking"];

import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
const FormContext = createContext();

const { Provider } = FormContext;

const formInitialState = {
  title: "untitled form",
  description: "form description",
  questions: [],
};

const actionTypes = {
  ADD_QUESTION: "ADD_QUESTION",
  UPDATE_VALUE: "UPDATE_VALUE",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
};

const actions = {
  addQuestion: () => ({
    type: actionTypes.ADD_QUESTION,
  }),
  updateValue: (event) => ({
    type: actionTypes.UPDATE_VALUE,
    payload: {
      value: event.target.value,
      name: event.target.name,
    },
  }),
  updateQuestion: ({ id, question, type, answer = "", required = true }) => ({
    type: actionTypes.UPDATE_QUESTION,
    payload: {
      id,
      question,
      type,
      answer,
      required,
    },
  }),
  deleteQuestion: ({ id }) => ({
    type: actionTypes.DELETE_QUESTION,
    payload: id,
  }),
};

function newFormReducer(state, action) {
  const { type } = action;
  switch (type) {
    case actionTypes.ADD_QUESTION: {
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            type: "",
            answer: "",
            id: uuid(),
            question: "Question here",
            required: true,
          },
        ],
      };
    }
    case actionTypes.DELETE_QUESTION: {
      const id = action.payload;
      return {
        ...state,
        questions: state.questions.filter((question) => question.id !== id),
      };
    }
    case actionTypes.UPDATE_QUESTION: {
      const { id } = action.payload;
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === id ? action.payload : question
        ),
      };
    }
    case actionTypes.UPDATE_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default:
      throw new Error("No actions matched for new form");
  }
}

const questionType = {
  SHORT_ANSWER: "SHORT_ANSWER",
  PARAGRAPH: "PARAGRAPH",
  DATE: "DATE",
  TIME: "TIME",
};

function FormContextProvider({ children }) {
  const [formData, dispatch] = useReducer(newFormReducer, formInitialState);

  return (
    <Provider value={{ dispatch, questionType, actions, formData }}>
      {children}
    </Provider>
  );
}

export { FormContextProvider, FormContext };

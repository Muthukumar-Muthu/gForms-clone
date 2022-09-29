import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import "./style.css";
import { db } from "../../firebase/firebaseConfig";

import { ID } from "../../../userDetail"; //for userId

const formsInitalState = {
  loading: true,
  data: [],
  error: null,
};

//actions
const actionTypes = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  LOADED: "LOADED",
};

//action creators
const actions = {
  loading: () => ({ type: actionTypes.LOADING }),
  error: (errMsg) => ({ type: actionTypes.ERROR, payload: errMsg }),
  loaded: (forms) => ({ type: actionTypes.LOADED, payload: forms }),
};

function formsReducer(state, action) {
  const { type } = action;
  switch (type) {
    case actionTypes.LOADING: {
      return { ...state, loading: true };
    }
    case actionTypes.LOADED: {
      return { ...state, loading: false, data: action.payload };
    }
    case actionTypes.ERROR: {
      return { ...state, loading: true, error: action.payload };
    }
    default:
      throw new Error("No actions matched for getting forms");
  }
}

const formHeader = (
  <>
    <p className="forms-caption">Recent Forms</p>
    <div className="forms-header table-flex">
      <h3 className="form-name">Name</h3>
      <h3 className="form-openedBy">Description</h3>
    </div>
  </>
);
const noFormsPh = (
  <div className="forms-noform">
    <h1>No forms yet</h1>
    <p>Click + at bottom right to create a new form.</p>
  </div>
);
const loading = "loading";

const Forms = () => {
  const [formsState, disptach] = useReducer(formsReducer, formsInitalState);

  // const [forms, setForms] = useState({ loading: true, forms: [] });
  const { data: forms } = formsState;

  useEffect(() => {
    async function getForms() {
      try {
        const userDoc = await getDoc(doc(db, "users", "" + ID));
        if (userDoc.exists()) {
          const { forms: formsList } = userDoc.data();
          const formsData = await Promise.all(
            formsList.map(async (form) => {
              const formPath = form.path;
              const formData = await getDoc(doc(db, formPath));
              return { id: formData.id, data: formData.data() };
            })
          );
          disptach(actions.loaded(formsData));
        } else disptach(actions.error("No userDoc exsits"));
      } catch (error) {
        console.error(error);
        disptach(actions.error("Error in code"));
      }
    }

    getForms();
  }, []);

  if (formsState.loading) return loading;
  return (
    <section className="forms">
      {formHeader}
      <div className="forms-body">
        {forms.length === 0
          ? { noFormsPh }
          : forms.map((form) => (
              <Link
                key={form.id}
                to={`/forms/${form.id}/viewform`}
                className="table-flex form"
              >
                <p title={form.data.title} className="form-name">
                  {form.data.title}
                </p>
                <p title={form.data.description} className="form-openedBy">
                  {form.data.description}
                </p>
              </Link>
            ))}
      </div>
    </section>
  );
};
export default Forms;

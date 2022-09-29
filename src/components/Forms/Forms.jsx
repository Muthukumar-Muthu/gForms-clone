import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ID } from "../../../userDetail";
import "./style.css";

const Forms = () => {
  const [forms, setForms] = useState({ loading: true, forms: [] });
  useEffect(() => {
    //check the doc is presented or not
    async function d() {
      const userObject = await getDoc(doc(db, "users", "" + ID));
      if (userObject.exists()) {
        const { forms } = userObject.data();
        const formsData = await Promise.all(
          forms.map(async (form) => {
            const formPath = form.path;
            const formData = await getDoc(doc(db, formPath));
            return { id: formData.id, data: formData.data() };
          })
        );
        setForms({ loading: false, forms: formsData });
      } else setForms({ loading: false, forms: [] });
    }
    d();
  }, []);
  return (
    <section className="forms">
      <p className="forms-caption">Recent Forms</p>
      <div className="forms-header table-flex">
        <h3 className="form-name">Name</h3>
        <h3 className="form-openedBy">Opened By</h3>
        <h3 className="form-time">Time</h3>
      </div>
      <div className="forms-body">
        {forms.loading ? (
          "loading"
        ) : forms.forms.length === 0 ? (
          <div className="forms-noform">
            <h1>No forms yet</h1>
            <p>Click + at bottom right to create a new form.</p>
          </div>
        ) : (
          forms.forms.map((form) => (
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
              <p title={form.time} className="form-time">
                {form.time}
              </p>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
export default Forms;

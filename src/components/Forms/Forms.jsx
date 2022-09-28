import { Link } from "react-router-dom";
import "./style.css";

const Forms = () => {
  const NoFormExists = (
    <div>
      <h1>No forms yet</h1>
      <p>Click + to create a new form.</p>
    </div>
  );
  return (
    <section className="forms">
      <p className="forms-caption">Recent Forms</p>
      <div className="forms-header table-flex">
        <h3 className="form-name">Name</h3>
        <h3 className="form-openedBy">Opened By</h3>
        <h3 className="form-time">Time</h3>
      </div>
      <div className="forms-body">
        {forms.length === 0 ? (
          <div className="forms-noform">
            <h1>No forms yet</h1>
            <p>Click + at bottom right to create a new form.</p>
          </div>
        ) : (
          forms.map((form) => (
            <Link to={`/forms/${form.id}`} className="table-flex form">
              <p title={form.name} className="form-name">
                {form.name}
              </p>
              <p title={form.openedBy} className="form-openedBy">
                {form.openedBy}
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

const forms = [
  {
    id: "1",
    name: "ddd",
    openedBy: "dd",
    time: "d",
  },
  {
    id: "1",
    name: "ddd",
    openedBy: "dd",
    time: "d",
  },
];

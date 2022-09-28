import { Link } from "react-router-dom";
import "./style.css";

const Forms = () => {
  return (
    <section className="forms">
      <p className="forms-caption">Recent Forms</p>
      <div className="forms-header table-flex">
        <h3 className="form-name">Name</h3>
        <h3 className="form-openedBy">Opened By</h3>
        <h3 className="form-time">Time</h3>
      </div>
      <div className="forms-body">
        {forms.map((form) => (
          <Link to={`/forms/${form.id}`} className="table-flex">
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
        ))}
      </div>
    </section>
  );
};
export default Forms;

const forms = [
  {
    name: "unttitlddddddddddddddddd dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddded",
    openedBy: "me",
    time: "51",
    id: 1,
  },
  {
    name: "unttitled",
    openedBy: "me",
    time: "51",
    id: 2,
  },
  {
    name: "unttitled",
    openedBy: "me",
    time: "51",
    id: 3,
  },
];

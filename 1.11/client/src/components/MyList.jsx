import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../redux/actions/servisesActions";
import ListItem from "./ListItem";
import Loader from "./Loader/Loader";

export default function MyList() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const result = useSelector((store) => store.services);

  useEffect(() => {
    setLoading(true);
    dispatch(getData());
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="list">
          <ul>
            {!!result.length &&
              result.map((el, index) => (
                <li key={el.id}>
                  <ListItem name={el.name} id={el.id} index={index} />
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

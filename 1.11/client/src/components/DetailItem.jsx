import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneItem } from "../redux/actions/servisesActions";
import axios from "axios";
import Loader from "./Loader/Loader";
import Card from 'react-bootstrap/Card';
export default function DetailItem() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(`http://localhost:7070/api/services/${id}`).then((result) => {
      setData(result.data);
      setLoading(false);
    });

  }, []);

  return <>
  {loading ?<div className="loaderBox">
    <Loader /> 
  </div> : 
 <div> 
  <Card className="cardItem">
 <Card.Body >
 <Card.Title>{data.name}</Card.Title>
 <Card.Text>{data.price}</Card.Text>
 </Card.Body>
</Card>
</div>
 }
  </>;
}

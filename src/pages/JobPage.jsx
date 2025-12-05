import React from "react";
// import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
// import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return <h1>{job.title}</h1>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

//----USE EFFECT WAY OF DOING THIS----//
/*
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJob = async () => {
        try {
          const res = await fetch(`/api/jobs/${id}`);
          const data = await res.json();
          setJob(data);
        } catch (error) {
          console.error("Error fetching data");
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }, []);
*/

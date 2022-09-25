import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "styled-components";

import "../../styles/dashboard.css";
import { DashboardSkeleton } from "../SkeletonLoader";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="dashboard">
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <div>
          <img
            className="dashboard-img"
            src="https://images.unsplash.com/photo-1663596989467-927ae4eab72d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="dashboard-img"
          />
          <h1>Lorem Ipsum</h1>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>
          <hr />
          <section>
            <h2>What is Lorem Ipsum?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

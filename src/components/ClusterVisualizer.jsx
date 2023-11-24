import React, { useState, useEffect } from 'react';

export const ClusterVisualizer = () => {
  const [pods, setPods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/clusterMap/pods');
        const data = await response.json();
        setPods(data)
      } catch (error) {
        return next(error)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cluster Visualization</h1>
      <ul>
        {pods.map((pod, index) => (
          <li key={index}>{pod.metadata.name}</li>
        ))}
      </ul>
    </div>
  );
};

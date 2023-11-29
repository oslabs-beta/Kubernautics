import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';

export const ClusterVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [pods, setPods] = useState([]);
  const [services, setServices] = useState([]);
  const [shortenName, setShortenName] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const podsResponse = await fetch('/api/clusterMap/pods');
        const servicesResponse = await fetch('/api/clusterMap/services');
        const nodesResponse = await fetch('/api/clusterMap/nodes');
        const podsData = await podsResponse.json();
        const servicesData = await servicesResponse.json();
        const nodesData = await nodesResponse.json();
        setPods(podsData);
        setServices(servicesData);
        setNodes(nodesData);
      } catch (error) {
        console.error('Failed fetching data');
      }
    };
    fetchData();
  }, []);

  const createGraph = () => {
    const createdNodes = [];
    const createdEdges = [];

    nodes.forEach((node, index) => {
      const nodeId = `node-${index}`;
      createdNodes.push({ id: nodeId, label: node.metadata.name, shape: 'circle', color: 'grey' });

      services.forEach((service, serviceIndex) => {
        const serviceNodeId = `service-${serviceIndex}`;
        createdNodes.push({
          id: serviceNodeId,
          label: shortenName
            ? service.metadata.name.slice(0, 10)
            : service.metadata.name,
          shape: 'box',
          color: '#6FB1FC'})
        createdEdges.push({ from: nodeId, to: serviceNodeId, id: `edge-service-${serviceIndex}` });

        pods.forEach((pod, podIndex) => {
          if (pod.metadata.name.includes(service.metadata.name.toLowerCase())) {
            const podNodeId = `pod-${podIndex}`;
            createdNodes.push({
              id: podNodeId,
              label: shortenName
                ? pod.metadata.name.slice(0, 10)
                : pod.metadata.name,
              shape: 'box',
              color: 'white'})
            createdEdges.push({ from: serviceNodeId, to: podNodeId, id: `edge-${podIndex}` });
          }
        });
      });
    });

    return { nodes: createdNodes, edges: createdEdges };
  };

  const graph = createGraph();

  const options = {
    layout: {
      randomSeed: 10, 
 
    },
    height: '1000px',
    physics: {
      barnesHut: {
        gravitationalConstant: -1000,
        centralGravity: 0,
        springLength: 150,
        springConstant: 0.003,
        damping: 0.09
      },
    },
    edges: {
      color: 'white',
    },
  };

  const events = {
    select: function (event) {
      setShortenName(!shortenName);
      console.log('You selected me');
    },
  };

  return <Graph key={JSON.stringify(graph)} graph={graph} options={options} events={events} />;
};



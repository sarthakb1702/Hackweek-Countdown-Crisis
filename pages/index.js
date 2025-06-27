import { useEffect, useState } from 'react';
import Countdown from '../components/Countdown';

export default function Home() {
  const [coscData, setCoscData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/cosc.json');
        const json = await res.json();
        setCoscData(json);
      } catch (err) {
        console.error('Failed to fetch cosc.json:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>COSC Hackweek</h1>

      <section>
        <h2 style={{ fontSize: '1.5rem' }}>⏳ Countdown Until Hackweek Ends:</h2>
       <Countdown endTime="2025-06-28T23:59:59" />

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>📄 COSC Info:</h2>
        {coscData ? (
          <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {coscData.name}</p>
            <p><strong>Description:</strong> {coscData.description}</p>
            <p><strong>Date:</strong> {coscData.date}</p>
            <p><strong>Location:</strong> {coscData.location}</p>
            <p><strong>Website:</strong> <a href={coscData.url} target="_blank" rel="noopener noreferrer">{coscData.url}</a></p>
          </div>
        ) : (
          <p>Loading COSC data...</p>
        )}
      </section>
    </main>
  );
}

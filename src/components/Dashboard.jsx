import React, { useEffect, useState } from 'react';
import { fetchIndianSongs2023 } from '../utils/spotify';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = 'BQAJGmNKWG8HxXAnFlY6WYkbY8_vszDps5jkdK3YSFdwGGXfLPKE8jPwfzGUR3MT6cm40hbvyq-LL-Bc8xWV6hITOAFqlgyOgD7lzzdhy35nLrc_FuqQ4VCnM4vsYHnPKMxYOMSC043immVRsngPJGc3p8ErCyVpcDzq1IUjssyW68HU3D6zjtoeC5xSXnnfXj3KlXqaN7jqBUW83OVjgg'; 
        const result = await fetchIndianSongs2023(token);
        const songs = result.tracks.items.slice(0, 20); 
        setData(songs);
        setFilteredData(songs);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data from Spotify API');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const filtered = data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredData(filtered.slice(0, 20)); 
  };

  if (loading) return <div style={messageStyle}>Loading...</div>;
  if (error) return <div style={errorMessageStyle}>{error}</div>;

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by song name"
        style={inputStyle}
      />
      <div style={chartStyle}>
        <h2>Bar Chart</h2>
        <BarChart data={filteredData} />
      </div>
      <div style={chartStyle}>
      <h2>Line Chart</h2>
        <LineChart data={filteredData} />
      </div>
      <div style={chartStyle}>
      <h2>Pie Chart</h2>
        <PieChart data={filteredData} />
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const inputStyle = {
  margin: '20px 0',
  padding: '10px',
  fontSize: '16px',
  width: '100%',
  maxWidth: '600px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const chartStyle = {
  margin: '50px 0',
  width: '100%',
  maxWidth: '800px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const messageStyle = {
  padding: '20px',
  fontSize: '18px',
  color: '#555',
  textAlign: 'center'
};

const errorMessageStyle = {
  ...messageStyle,
  color: '#ff4d4d'
};

export default Dashboard;

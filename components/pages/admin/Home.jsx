"use client";
import React, { useEffect, useState } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from 'react-icons/bs';
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const HomeAdmin = () => {
  const [stats, setStats] = useState({
    formations: 0,
    users: 0,
    leads: 0,
    // alerts: 0
  });

  useEffect(() => {
    // Charger les données au montage
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard-stats');
        const data = await res.json();
        if (res.ok) {
          setStats({
            formations: data.formations,
            users: data.users,
            leads: data.leads,
            // alerts: data.alerts,
          });
        } else {
          console.error('Erreur API stats:', data);
        }
      } catch (err) {
        console.error('Erreur fetch stats:', err);
      }
    };

    fetchStats();
  }, []);

  // Exemple de données graphiques dynamiques, basées sur stats
  const data = [
    { name: 'Formations', value: stats.formations },
    { name: 'Users', value: stats.users },
    { name: 'Leads', value: stats.leads },
    // { name: 'Alerts', value: stats.alerts },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Cours</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{stats.formations}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3 className="light">Apprenants</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{stats.users}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Leads</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{stats.leads}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          {/* Placeholder si aucun modèle Alert n'existe */}
          <h1>{stats.alerts ?? '-'}</h1>
        </div>
      </div>

      <div className="charts" style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default HomeAdmin;

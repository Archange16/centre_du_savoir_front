//"use client";
import Layout from '../../../components/Dashboard/Layout';
import StatsCards from '../../../components/Dashboard/StatsCards';
import Charts from '../../../components/Dashboard/Charts';
import DataTable from '../../../components/Dashboard/DataTable';

const DashboardPage = () => {
  return (
    <Layout>
      <StatsCards />
      <Charts />
      <DataTable />
    </Layout>
  );
};

export default DashboardPage;
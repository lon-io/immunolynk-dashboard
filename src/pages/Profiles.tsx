import React from 'react';
import Table from '../components/Table';

const data = React.useMemo(
  () => [
    {
      name: 'Samantha Doe',
      dept: 'Emergency',
      role: 'Attending Physician',
      testDeployed: false,
      immunityStatus: 'Immune',
    },
    {
      name: 'John Doe',
      dept: 'Emergency',
      role: 'Attending Physician',
      testDeployed: false,
      immunityStatus: 'Immune',
    },
    {
      name: 'Chris Doe',
      dept: 'Emergency want',
      role: 'Attending Physician',
      testDeployed: false,
      immunityStatus: 'Immune',
    },
    {
      name: 'Matthew Doe',
      dept: 'Emergency want',
      role: 'Attending Physician',
      testDeployed: false,
      immunityStatus: 'Immune',
    },
    {
      name: 'Tom Doe',
      dept: 'Emergency want',
      role: 'Attending Physician',
      testDeployed: false,
      immunityStatus: 'Immune',
    },
  ],
  []
);

const columns = React.useMemo(
  () => [
    {
      Header: 'Name',
      accessor: 'name', // accessor is the "key" in the data
    },
    {
      Header: 'Department',
      accessor: 'dept',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
    {
      Header: 'Department',
      accessor: 'testDeployed',
    },
    {
      Header: 'Immunity Status',
      accessor: 'immunityStatus',
    },
  ],
  []
);

const Profiles = () => <Table data={data} columns={columns} />;

export default Profiles;

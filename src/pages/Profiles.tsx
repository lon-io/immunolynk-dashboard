import React from 'react';
import Table from '../components/Table';
import DashboardContainer from '../components/DashboardContainer';
import { colors } from '../styleguide/colors';

export enum ImmunityStatus {
  Immune = 'Immune',
  NotImmune = 'Not Immune',
  NotTested = 'Not Tested',
}

const rawData = [
  {
    name: 'Samantha Doe',
    dept: 'Emergency',
    role: 'Attending Physician',
    testDeployed: 'Yes',
    immunityStatus: ImmunityStatus.Immune,
  },
  {
    name: 'John Doe',
    dept: 'Emergency',
    role: 'Attending Physician',
    testDeployed: 'No',
    immunityStatus: ImmunityStatus.Immune,
  },
  {
    name: 'Chris Doe',
    dept: 'Emergency',
    role: 'Attending Physician',
    testDeployed: 'Yes',
    immunityStatus: ImmunityStatus.NotImmune,
  },
  {
    name: 'Matthew Doe',
    dept: 'Emergency',
    role: 'Attending Physician',
    testDeployed: 'No',
    immunityStatus: ImmunityStatus.Immune,
  },
  {
    name: 'Tom Doe',
    dept: 'Emergency',
    role: 'Attending Physician',
    testDeployed: 'Yes',
    immunityStatus: ImmunityStatus.NotTested,
  },
];

const rawColumns = [
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
    Header: 'Test Deployed',
    accessor: 'testDeployed',
  },
  {
    Header: 'Immunity Status',
    accessor: 'immunityStatus',
  },
];

const Profiles = () => {
  const data = React.useMemo(() => rawData, []);

  const columns = React.useMemo(() => rawColumns, []);

  const getRowColor = (index: number): string => {
    const row = data[index];
    const rowStatus = row.immunityStatus;

    switch (rowStatus) {
      case ImmunityStatus.NotImmune:
        return 'red';
      case ImmunityStatus.Immune:
        return colors.primary;
      default:
        return '';
    }
  };

  return (
    <DashboardContainer activeItem="dashboard">
      <Table data={data} columns={columns} getRowColor={getRowColor} />
    </DashboardContainer>
  );
};

export default Profiles;

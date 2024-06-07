import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Table from './Table';
import Chart from './Chart';
import Calendar from './Calendar';
import KanbanBoard from './KanbanBoard';

function Dashboard({ toggleTheme }) {
  return (
    <Box p={3}>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
      <Box mt={3}>
        <Table />
      </Box>
      <Box mt={3}>
        <Chart />
      </Box>
      <Box mt={3}>
        <Calendar />
      </Box>
      <Box mt={3}>
        <KanbanBoard />
      </Box>
    </Box>
  );
}

export default Dashboard;

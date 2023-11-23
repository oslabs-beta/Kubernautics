import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
} from '@mui/material';

const DropDownMenu = () => {
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('');
  const [selectedStepSize, setSelectedStepSize] = useState('');
  //Provide the possible promql metric look ups

  const promqlOptions = [
    'node_cpu_seconds_total',
    'process_cpu_seconds_total',
    'node_memory_MemTotal_bytes',
    'node_network_receive_bytes_total',
    'node_network_transmit_bytes_total',
    'http_requests_total',
    'http_request_duration_seconds',
    'container_cpu_usage_seconds_total',
    'container_memory_usage_bytes',
    'container_network_receive_bytes_total',
  ];

  //options for collection time in dropdown
  const timeranges = ['1h', '2h', '4h', '6h', '12h', '24h'];
  //options for data step intervals in dropdown
  const stepsizes = ['10s', '15s', '30s', '60s', '120s', '300s'];

  const ddMenu = promqlOptions.map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  const ddTimeRanges = timeranges.map((range) => (
    <MenuItem key={range} value={range}>
      {range}
    </MenuItem>
  ));

  const ddStepSizes = stepsizes.map((stepSize) => (
    <MenuItem key={stepSize} value={stepSize}>
      {stepSize}
    </MenuItem>
  ));

  // for (let i = 0; i < promqlOptions.length; i++) {
  //   ddMenu.push(
  //     <MenuItem value={`${promqlOptions[i]}`}>{`${promqlOptions[i]}`}</MenuItem>
  //   );
  // }
  // for (let i = 0; i < timeranges.length; i++) {
  //   ddTimeRanges.push(
  //     <MenuItem
  //       key={`${timeranges[i]}`}
  //       value={`${timeranges[i]}`}
  //     >{`${timeranges[i]}`}</MenuItem>
  //   );
  //   ddStepSizes.push(
  //     <MenuItem
  //       key={`${stepsizes[i]}`}
  //       value={`${stepsizes[i]}`}
  //     >{`${stepsizes[i]}`}</MenuItem>
  //   );
  // }

  //form control has a scroll if there is too many options
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id='dropdown-label'>Search for an Expression</InputLabel>
        <Select
          id='dropdown'
          value={selectedTask}
          onChange={(e) => {
            const searchTask = e.target.value;
            setSelectedTask(searchTask);
          }}
          label='Select an option'
        >
          {ddMenu}
        </Select>
      </FormControl>

      {/* Display the selected value */}
      <p>Selected Value: {selectedTask}</p>

      <FormControl fullWidth>
        <InputLabel id='timeRange'>Set a time range</InputLabel>
        <Select
          id='timeOptions'
          value={selectedTimeRange}
          onChange={(e) => {
            const timeduration = e.target.value;
            setSelectedTimeRange(timeduration);
          }}
          label='Select an option'
        >
          {ddTimeRanges}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='stepsize'>Set a step size</InputLabel>
        <Select
          id='stepsizeOptions'
          value={selectedStepSize}
          onChange={(e) => {
            const stepsizing = e.target.value;
            setSelectedStepSize(stepsizing);
          }}
          label='Select an option'
        >
          {ddStepSizes}
        </Select>
      </FormControl>
    </div>
  );
};

// export function DropDownMenu() {
//   const [open, setOpen] = useState(false);
//   const [selection, setSelection] = useState([]);

//   function handleOnClick(item) {}

//   return (
//     <div className='dropdown'>
//       <div
//         tabIndex={0}
//         className='dropdown-items'
//         role='button'
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}
//       >
//         <div className='dd-title'>
//           <p className='dd-title--bold'></p>
//         </div>
//       </div>
//     </div>
//   );
// }

export const CustomChart = (props) => {
  return (
    <Container id='charts'>
      <DropDownMenu />
    </Container>
  );
};

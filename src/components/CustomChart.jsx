import React, { useState } from 'react';
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import actions from './action';

const DropDownMenu = (props) => {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [selectedTask, setSelectedTask] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('');
  const [selectedStepSize, setSelectedStepSize] = useState('');
  const [showForm, setShowForm] = useState(false);

  const actionTasks = Object.keys(actions.data);
  //Provide the possible promql metric look ups, type, and help description
  const ddActionTasks = [];
  for (let i = 0; i < actionTasks.length; i++) {
    ddActionTasks.push(
      <MenuItem key={actionTasks[i]} value={actionTasks[i]}>
        <Grid container spacing={8} key={actionTasks[i]} value={actionTasks[i]}>
          <Grid item xs={4}>
            {actionTasks[i]}
          </Grid>
          <Grid item xs={4}>
            {actions.data[actionTasks[i]][0].type}
          </Grid>
          <Grid item xs={4}>
            {actions.data[actionTasks[i]][0].help}
          </Grid>
        </Grid>
      </MenuItem>
    );
  }

  //Options for collection time in dropdown
  const timeranges = ['1h', '2h', '4h', '6h', '12h', '24h'];
  //Options for data step intervals in dropdown
  const stepsizes = ['10s', '15s', '30s', '60s', '120s', '300s'];

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

  const handleButtonClick = () => {
    setShowForm(true);
  };
  //Form control has a scroll if there is too many options
  return (
    <div>
      <Button variant='contained' onClick={handleButtonClick}>
        Add Metric
      </Button>
      {showForm && (
        <div>
          <FormControl fullWidth>
            <InputLabel id='timeRange'>Select a Query</InputLabel>
            <Select
              id='taskname'
              value={selectedTask}
              onChange={(e) => {
                setButtonStatus(false);
                const taskname = e.target.value;
                setSelectedTask(taskname);
              }}
              label='Select an option'
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 180, // Set the maximum height of the dropdown menu
                  },
                },
              }}
            >
              {ddActionTasks}
            </Select>
          </FormControl>

          {/* <FormControl>
        <Autocomplete
          disablePortal
          id='task-dropdown'
          options={ddActionTasks}
          sx={{ width: 300 }}
          // getOptionLabel={(options) => ''}
          // onChange={(e) => {
          //   // only when query selected can we create a chart. HAVING ISSUES WITH THIS. W/ THE CURRENT HELP INFORMATION, UNABLE TO MAKE THIS INTO AN AUTOCOMPLETE
          //   const newValue = e.target.value;
          //   setButtonStatus(false);
          // }}
          renderInput={(params) => (
            <TextField {...params} label='Search Query' />
          )}
        ></Autocomplete>
      </FormControl> */}
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

          <Button
            variant='contained'
            disabled={buttonStatus}
            onClick={() => {
              const newQuery =
                //this would be a fetch request to the backend passing in the constructed query statement
                selectedTask + `[${selectedTimeRange}]`;
              // + `[${selectedStepSize}]`;
              props.onSaveToLocalStorage(selectedTask, selectedTimeRange);
              setShowForm(false);
            }}
          >
            Create Chart
          </Button>
        </div>
      )}
    </div>
  );
};

export const CustomChart = (props) => {
  return (
    <Container id='ddMenu'>
      <DropDownMenu onSaveToLocalStorage={props.onSaveToLocalStorage} />
    </Container>
  );
};

import React, { Component } from 'react';
import { Grid, Checkbox, FormControlLabel, Table, TableHead, TableBody, TableCell, TableRow } from '@material-ui/core';
import { MainForm, FieldForm } from '../components';
import { Modal, FormButton } from '../common';
import { connect } from 'react-redux';

const data = [
  {
    name: 'test1',
    age: 26,
    email: 'test@test.com',
  },
  {
    name: 'test2',
    age: 26,
    email: 'test2@test.com',
  },
  {
    name: 'test3',
    age: 26,
    email: 'test3@test.com',
  },
  {
    name: 'test4',
    age: 26,
    email: 'test4@test.com',
  },
  {
    name: 'test5',
    age: 26,
    email: 'test5@test.com',
  },
  {
    name: 'test6',
    age: 26,
    email: 'test6@test.com',
  },
]

class App extends Component {
  state = {
    data: {
      headers: [],
      headersTxt: [],
      values: data,
      item: {
        name: '',
        age: '',
        email: ''
      }
    }
  }

  componentDidMount() {
    const { item = {} } = this.state.data;
    let items = Object.keys(item);
    let arr = items && items.map( item => ({ [item]: true }));
    this.setState({
      data: {
        ...this.state.data,
        headers: arr,
        headersTxt: items
      }
    })
  }

  onChange = (key, header, val) => {
    console.log(key, val, 'onChange');
    let { data } = this.state;
    data['headers'][key][header] = val;
    this.setState({ data });
    this.updateDataSet(data)
  }

  updateDataSet = () => {

    let { values = [] } = data;
    let item = values[0]
    let items = Object.keys(item);
    let arr = items && items.map(item => ({ [item]: true }));
    this.setState({
      data: {
        ...this.state.data,
        headers: arr,
        headersTxt: items.filter(a => !!a)
      }
    })
  }

  render() {
    const { data = [] } = this.state;
    const { headers = [], values = [], headersTxt = [] } = data;
    console.log(data, 'data');

    return (
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Grid item xs={12}>
            <h4>Show/Hide Columns</h4>
          </Grid>
          {headersTxt && headersTxt.map((header, key) => <Grid container key={key}>
            <Grid item xs={12}>
            {console.log(headers[key][header], headers, header)}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={headers[key][header]}
                    onChange={(e) => this.onChange(key, header, e.target.checked)}
                  />
                }
                label={header}
              />
            </Grid>
          </Grid>)}
        </Grid>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <h4>Table</h4>
            </Grid>
            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow> 
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                    <TableCell><FormButton>Hide</FormButton></TableCell>
                  </TableRow>
                  <TableRow> 
                    {headersTxt && headersTxt.map((value, key) => <TableCell key={key}>{value}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    values && values.map((item, i) => <TableRow key={i}>
                      
                      {headersTxt && headersTxt.map((value, key) => <TableCell key={key}>{item[value]}</TableCell>)}
                    </TableRow>)
                  }
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </Grid>    
    );
  }
}

export default connect((state) => state)(App);

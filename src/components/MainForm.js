import React from 'react';
import { Grid } from '@material-ui/core';
import { FormInput, FormButton } from '../common';


const MainForm = props => {
  const { fields = [] } = props;
  const { openModal } = props;

  return (
    <Grid container>
      <Grid item xs={12} style={{textAlign: 'right', padding: 5}}>
        <FormButton clr="teal" onClick={openModal}>Create</FormButton>
        <FormButton clr="teal">Update</FormButton>
      </Grid>
      <Grid item xs={12}>
      
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          {
            fields && fields.map((field, key) => <Grid item xs={12} sm={field.type === 'textarea' ? 12 : 6} md={field.type === 'textarea' ? 12 : 6} key={key} style={{padding: '2px 5px'}}>
              <FormInput
                name={field.name}
                fullWidth
                type={field.type}
                max={field.max}
              />
            </Grid>)
          }
        </Grid>
      </Grid>
      <Grid item xs={12} style={{padding: '20px 10px', textAlign: 'center'}}>
        <FormButton clr="teal">Save</FormButton>
        <FormButton clr="red">Cancel</FormButton>
      </Grid>
    </Grid>
  )
}

export default MainForm;
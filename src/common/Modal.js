import React from 'react';
import { Dialog, Slide, DialogTitle, DialogActions, DialogContent } from '@material-ui/core';
import { FormButton } from './';

const Transition = props => <Slide direction="up" {...props} />

export default class Modal extends React.Component {
  state = {
    open: false,
  };

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  onConfirm = () => {

  }

  render() {
    const { title, cancelTxt, confirmTxt, size } = this.props;

    // console.log(this.props, 'this.props');
    return (
      <Dialog
        open={this.state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.close}
        fullWidth
        maxWidth={size || 'md'}
      >
        <DialogTitle>
          <span style={{color: 'teal'}}>{title}</span>
        </DialogTitle>
        <DialogContent>
          {this.props.children} 
        </DialogContent>
        <DialogActions>
          {confirmTxt && <FormButton onClick={this.onConfirm} clr="teal">{confirmTxt}</FormButton>}
          {cancelTxt && <FormButton onClick={this.close} clr="red">{cancelTxt}</FormButton>}
        </DialogActions>
      </Dialog>
    );
  }
}

import React, {ChangeEvent, useState} from "react";
import Layout  from "../../components/layout";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Tooltip,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon  from '@material-ui/icons/Assignment';
import CopyToClipboard from 'react-copy-to-clipboard';

const toolTitle = 'Uppercase Lowercase'
const description = '大文字小文字変換するよ made with Material-UI'

const useStyles = makeStyles(() =>
  createStyles({
    textarea: {
      paddingTop: '4px'
    },
    srcTextarea: {
      paddingTop: '4px',
      resize: 'vertical',
    },
    adornedStart: {
      padding: '8px 1px 1px 0',
    },
    adornedEnd: {
      padding: '8px 0 1px 12px',
    },
    root: {
      alignItems: 'normal',
    },
  }),
);

export default function URLDecode() {
  const classes = useStyles();
  const [srcLetters, setSrcLetters] = useState('');
  const [destLetters, setDestLetters] = useState('');
  const [copiedOpen, setCopiedOpen] = useState<boolean>(false);

  const handleChangeSrcLetters = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setSrcLetters(event.target.value)
  };
  const handleClickUpper = (): void => {
    setDestLetters(srcLetters.toUpperCase())
  };
  const handleClickLower = (): void => {
    setDestLetters(srcLetters.toLowerCase())
  };
  const handleClickSwap = (): void => {
    setSrcLetters(destLetters);
    setDestLetters(srcLetters);
  };
  const handleClickDelete = (): void => {
    setSrcLetters('');
  };

  const handleClickCopy = (): void => {
    setCopiedOpen(true);
  };
  const handleCloseCopied = (): void => {
    setCopiedOpen(false);
  };

  return (
    <Layout toolTitle={toolTitle} description={description}>

      <div>

        <Grid container spacing={1}>
          <Grid item xs>
            <OutlinedInput
              id="source-letters"
              type="text"
              multiline
              fullWidth
              rows={ 10 }
              classes={{
                adornedStart: classes.adornedStart,
                root: classes.root
              }}
              inputProps={{className: classes.srcTextarea}}
              placeholder="Enter letters that you want to convert."
              value={srcLetters}
              onChange={handleChangeSrcLetters}
              startAdornment={
                <InputAdornment
                  position="start"
                  classes={{ root: classes.root }}
                >
                  <Tooltip
                    title="Delete"
                    arrow
                    placement='top'
                  >
                    <IconButton
                      aria-label="delete"
                      disabled={srcLetters === ''}
                      onClick={handleClickDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
            />
          </Grid>

          <Grid item xs= "auto">
            <ButtonGroup
              orientation="vertical"
              size="large"
              aria-label="convert letters buttons"
              variant="contained"
            >
              <Button
                color="secondary"
                onClick={handleClickUpper}
              >
                Upper
              </Button>
              <Button
                color="primary"
                onClick={handleClickLower}
              >
                Lower
              </Button>
              <Button
                variant="contained"
                onClick={handleClickSwap}
              >
                Swap
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs>
            <OutlinedInput
              id="destination-letters"
              type="text"
              multiline
              fullWidth
              readOnly
              rows={ 10 }
              inputProps={{className: classes.textarea}}
              classes={{
                adornedEnd: classes.adornedEnd,
                root: classes.root
              }}
              placeholder="The converted letters will be displayed here."
              value={destLetters}
              endAdornment={
                <InputAdornment
                  position="end"
                  classes={{ root: classes.root }}
                >
                  <Tooltip
                    arrow
                    open={copiedOpen}
                    onClose={handleCloseCopied}
                    disableHoverListener
                    placement='top'
                    title='Copied!'
                  >
                    <CopyToClipboard text={destLetters}>
                      <IconButton
                        disabled={destLetters === ''}
                        onClick={handleClickCopy}
                      >
                        <AssignmentIcon />
                      </IconButton>
                    </CopyToClipboard>
                  </Tooltip>
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>

      </div>

    </Layout>
  )
}

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Grid, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { searchIpToStore, selectList } from '../../redux/search';
import useFetch from '../../hooks/useFetch';
import { stackToStore } from '../../redux/stackSearch';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const originalList = useAppSelector(selectList);
  const [ipVariable, setIpVariable] = useState('');
  const accessKeyIpStack = process.env.REACT_APP_IPSTACK_API_KEY;
  const stackUrl = `https://api.ipstack.com/${ipVariable}?access_key=${accessKeyIpStack}`;
  const { data } = useFetch(stackUrl);

  if (data) {
    dispatch(stackToStore(data));
  }
  const isValidUrl = (value: string) => {
    return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(value);
  };

  const isValidIpAddress = (value: string) => {
    return /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(value);
  };

  const formik = useFormik({
    initialValues: {
      inputValue: '',
    },
    validationSchema: Yup.object({
      inputValue: Yup.string()
        .required('This field is required')
        .test(
          'is-valid-input',
          'Please input proper IP or URL',
          (value) => isValidIpAddress(value) || isValidUrl(value)
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      if (isValidIpAddress(values.inputValue)) {
        setIpVariable(values.inputValue);
      } else if (isValidUrl(values.inputValue)) {
        const url = new URL(values.inputValue);
        const ipAddress = url.hostname;
        setIpVariable(ipAddress);
      }
      resetForm();
    },
  });

  useEffect(() => {
    if (ipVariable) {
      dispatch(searchIpToStore(`${ipVariable}`));
      if (originalList?.length > 0) {
        const storageList = [...originalList, ipVariable];
        sessionStorage.setItem('sessionList', JSON.stringify(storageList));
      }
    }
  }, [ipVariable]);

  return (
    <Container data-testid="search-component" style={{ minHeight: '300px' }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} alignItems="center" style={{ paddingTop:'9px' }}>
          <Grid item xs={8}>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <TextField
                data-testid="input"
                label="Text here IP or URL"
                variant="outlined"
                fullWidth
                id="inputValue"
                name="inputValue"
                value={formik.values.inputValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.inputValue && Boolean(formik.errors.inputValue)}
                InputProps={{
                  style: {
                    fontSize: '1.6rem',
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: '1.6rem',
                  },
                }}
                inputProps={{
                  "aria-label": "Text here IP or URL",
                }}
              />
              {formik.touched.inputValue && formik.errors.inputValue && (
                <Typography
                  style={{
                    fontSize: '12px',
                    position: 'absolute',
                    bottom: formik.errors.inputValue ? '-20px' : '0',
                    left: '0',
                    color: 'red',
                  }}
                >
                  {formik.errors.inputValue}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              style={{
                fontWeight: 'bold',
                fontSize: '1.4rem',
                height: '50px',
                width: '80%',
              }}
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Search;

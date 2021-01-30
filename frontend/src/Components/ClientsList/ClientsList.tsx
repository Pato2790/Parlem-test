import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import ClientsListStyle from './ClientsListStyle';
import useFetch from '../../Services/Fech/useFetch';
import { Client } from '../../Models/client';
import ProductList from '../ProductList/ProductList';

const baseUrl: string = "http://localhost:4000/api/clients";

const ClientsList = () => {
  const classes = ClientsListStyle();

  const { data, loading } = useFetch(baseUrl);

  return (
    <>
      {loading ? (
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={10}>
            Obteniendo Clientes...
          </Box>
        </Typography>
      ) : (
          <>
            {data.map((client: Client, indexClient: number) => (
              <Card key={indexClient} className={`${classes.client} ${classes.marginClient}`}>
                <CardContent>
                  <Typography component="div">
                    <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h4.fontSize" m={1}>
                      {`${client.givenName} - ${client.familyName1}`}
                    </Box>
                  </Typography>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    className={classes.client}
                  >
                    <Typography component="div">
                      <Box style={{ textTransform: "capitalize" }} fontWeight="fontWeightBold" textAlign="left" fontSize="h6.fontSize">
                        {`${client.docType}: ${client.docNum}`}
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="left" fontSize="h6.fontSize">
                        {`Email: ${client.email}`}
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="left" fontSize="h6.fontSize">
                        {`Telefono: ${client.phone}`}
                      </Box>
                    </Typography>
                  </Grid>
                </CardContent>
                <ProductList customerId={client.customerId} />
              </Card>
            ))}
          </>
        )}
    </>
  );
}

export default ClientsList;
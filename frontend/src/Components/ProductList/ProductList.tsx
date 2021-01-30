import React from "react";
import { Typography, Box, Table, TableBody, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { CustomTableCell } from "../../Themes/Table/customTableCellStyle";
import { CustomTableRow } from "../../Themes/Table/customTableRowStyle";
import { Product } from "../../Models/product";
import ProductListStyle from './ProductListStyle';
import useFetch from "../../Services/Fech/useFetch";

const baseUrl: string = 'http://localhost:4000/api/productByClient/';

interface ProductListProps {
  customerId: number
}

const ProductList = ({ customerId }: ProductListProps) => {
  const classes = ProductListStyle();

  const { data, loading } = useFetch(baseUrl + customerId);

  return (
    <>
      {loading ? (
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={10}>
            Obteniendo Productos...
          </Box>
        </Typography>
      ) : (
          <>
            { data.length > 0 ? (
              <TableContainer>
                <Typography component="div">
                  <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h5.fontSize" m={1}>
                    Productos
                  </Box>
                </Typography>
                <Table className={classes.table} aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Nombre</CustomTableCell>
                      <CustomTableCell>Tipo</CustomTableCell>
                      <CustomTableCell>Numeración</CustomTableCell>
                      <CustomTableCell>Fecha Venta</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((product: Product, indexProduct: number) => (
                      <CustomTableRow key={indexProduct}>
                        <CustomTableCell>{product.productName}</CustomTableCell>
                        <CustomTableCell>{product.productTypeName}</CustomTableCell>
                        <CustomTableCell>{product.numeracioTerminal}</CustomTableCell>
                        <CustomTableCell>{product.soldAt}</CustomTableCell>
                      </CustomTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
                <Typography component="div">
                  <Box fontWeight="fontWeightBold" textAlign="center" fontSize="1.1em" m={5}>
                    El cliente está próximo a adquirir un producto de Parlem Telecom!
                  </Box>
                </Typography>
              )
            }
          </>
        )
      }
    </>
  );
}

export default ProductList;
import React, { useEffect, useLayoutEffect, useState } from "react";
import MiniDrawer from "../../components/navbar/NavBar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Grow,
  Typography,
} from "@mui/material";

import SearchResultTable from "../../components/table/SearchResultTable";
import AutoComplete from "../../components/autoComplete/AutoComplete";
import { Code, Label } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import CustomCard from "../../components/cards/CustomCard";
import googledrive from "../../assets/images/google-drive.png";
import cardimg from "../../assets/images/1.jpg";
import LinearWithValueLabel from "../../components/progressBar/ProgressBar";
import { DigitalClock } from "../../components/clock/DigitalClock";

function Dashboard() {
  const tableDataBase = [
    { code: "A123", Name: "John Doe", size: "51MB", type: "Document" },
    { code: "B456", Name: "Jane Smith", size: "52MB", type: "Image" },
    { code: "C789", Name: "Robert Johnson", size: "53MB", type: "Spreadsheet" },
    { code: "D012", Name: "Emily Davis", size: "54MB", type: "Presentation" },
    { code: "E345", Name: "Michael Brown", size: "55MB", type: "Video" },
    { code: "F678", Name: "Sophia Miller", size: "56MB", type: "Audio" },
    { code: "G901", Name: "Daniel Wilson", size: "57MB", type: "Code" },
    { code: "H234", Name: "Olivia Garcia", size: "58MB", type: "PDF" },
  ];
  const [columnHeaders] = useState<any>([
    "Document Code",
    "Document Name",
    "Document Size",
    "Document Type",
  ]);
  const { register, handleSubmit, setValue, control, watch, reset } = useForm();
  const [searchResult, setSearchResult] = useState<Array<any>>([]);

  const arrayData = searchResult?.map(({ code }: any) => ({
    value: code,
    label: code,
  }));
  const arrayData2 = searchResult?.map(({ Name }: any) => ({
    value: Name,
    label: Name,
  }));
  const arrayData3 = searchResult?.map(({ Name, type }: any) => ({
    value: type,
    label: Name,
  }));

  useLayoutEffect(() => {
    setSearchResult(tableDataBase);
  }, []);

  const onCLick = (data: any) => {
    const filteredData = tableDataBase.filter((item) => {
      const codematch = data.code ? item.code == data.code : true;
      const Namematch = data.Name ? item.Name == data.Name : true;
      const typematch = data.type ? item.type == data.type : true;
      return codematch && Namematch && typematch;
    });

    setSearchResult(filteredData);
    console.log(filteredData);
    console.log(data);
  };

  const clear = () => {
    setSearchResult(tableDataBase);
    reset();
  };
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    const animation = setTimeout(() => {
      setChecked(true);
    }, 0);
    return () => clearTimeout(animation);
  }, []);

  // cards
  const FourCards = () => {
    return (
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((cardNumber) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={cardNumber}
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "16px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#1D8348",
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" component="div">
                    Card {cardNumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card content goes here.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  // cards

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: {
            md: "space-between",
            sm: "center",
            xs: "center",
            alignItems: "center",
          },
          alignItems: "center",
        }}
      >
        <Grid item>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <h1 style={{ color: "gray", paddingRight: "25px" }}>Dashboard</h1>
          </Grow>
        </Grid>
        <Grid item>
          {" "}
          <DigitalClock />
        </Grid>
      </Grid>
      {/* <Card
        sx={{
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",

          marginX: "50px",
          paddingY: "15px",
          paddingX: "10px",
        }}
      >
        <Grid
          container
          columnSpacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <AutoComplete
              helperText={undefined}
              label={"Code"}
              options={arrayData}
              id={"code"}
              error={false}
              setValue={setValue}
              required={false}
              disabled={false}
              control={control}
              watch={watch}
            />
          </Grid>

          <Grid item md={3} lg={3} sm={12} xs={12}>
            <AutoComplete
              helperText={undefined}
              label={"Name"}
              options={arrayData2}
              id={"Name"}
              error={false}
              setValue={setValue}
              required={false}
              disabled={false}
              control={control}
              watch={watch}
            />
          </Grid>
          <Grid item md={3} lg={3} sm={12} xs={12}>
            <AutoComplete
              helperText={undefined}
              label={"Type"}
              options={arrayData3}
              id={"type"}
              error={false}
              setValue={setValue}
              required={false}
              disabled={false}
              control={control}
              watch={watch}
            />
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              alignItems: "center",
              paddingTop: "2px",
              marginBottom: "5px",
            }}
          >
            <Button variant="contained" sx={{}} onClick={handleSubmit(onCLick)}>
              Search
            </Button>

            <Button variant="outlined" sx={{}} onClick={clear}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </Card> */}
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          // overflow: "auto",
          // px: 3,
          // mt: 5,
        }}
      >
        {" "}
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          <Grid
            item
            // spacing={2}
            md={12}
            sx={{
              p: 3,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              // padding: "16px",
              // border: "2px solid red",
              backgroundColor: "#fff",
              borderRadius: "5px",

              // overflow: "auto",
            }}
          >
            <Grid container spacing={2}>
              <Grid item md={3} sm={12} xs={12}>
                <AutoComplete
                  helperText={undefined}
                  label={"Code"}
                  options={arrayData}
                  id={"code"}
                  error={false}
                  setValue={setValue}
                  required={false}
                  disabled={false}
                  control={control}
                  watch={watch}
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <AutoComplete
                  helperText={undefined}
                  label={"Name"}
                  options={arrayData2}
                  id={"Name"}
                  error={false}
                  setValue={setValue}
                  required={false}
                  disabled={false}
                  control={control}
                  watch={watch}
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <AutoComplete
                  helperText={undefined}
                  label={"Type"}
                  options={arrayData3}
                  id={"type"}
                  error={false}
                  setValue={setValue}
                  required={false}
                  disabled={false}
                  control={control}
                  watch={watch}
                />
              </Grid>
              <Grid
                item
                md={3}
                sm={12}
                xs={12}
                alignItems={"center"}
                display={"flex"}
                gap={2}
              >
                <Button
                  variant="contained"
                  sx={{}}
                  onClick={handleSubmit(onCLick)}
                >
                  Search
                </Button>

                <Button variant="outlined" sx={{}} onClick={clear}>
                  Clear
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grow>
        <Grid item md={12} sm={12} xs={12}>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 2000 } : {})}
          >
            <Card
              sx={{
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                marginTop: "16px",
                overflow: "auto",
              }}
            >
              <Typography
                sx={{
                  margin: "5px",
                  fontWeight: 700,
                  color: "#808080",
                }}
              >
                Search Results
              </Typography>
              <SearchResultTable
                actionButtons={[]}
                rows={searchResult}
                columnHeaders={columnHeaders}
              />
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;

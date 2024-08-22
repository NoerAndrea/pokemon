import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { getPokemonsById } from "../store/modules/pokemons/pokemonsSlice";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { LikeIcon } from "../components/LikeIcon";
import { Navbar } from "../components/Navbar";
import { useTheme } from "styled-components";

export function Pokemon() {
  const params = useParams();
  const pokemon = useAppSelector((state) =>
    getPokemonsById(state.pokemons, Number(params.pokemonId))
  );
  const theme = useTheme();

  return (
    <Box component={"main"}>
      <Navbar>
        <ul>
          <li>
            <a href="/pokemon">
              <img src={theme.images.logo} alt="Logo"></img>
            </a>
          </li>
        </ul>
      </Navbar>
      <Container
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ minWidth: "100%" }}
          justifyContent={"center"}
          mt={9}
        >
          {pokemon ? (
            <Card
              sx={{
                minWidth: "60%",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.65)",
                "&:hover": {
                  transform: "none",
                },
              }}
            >
              <CardActionArea>
                <Typography
                  fontSize={"1.1rem"}
                  position={"absolute"}
                  top={0}
                  right={0}
                  m={1}
                >
                  nº {pokemon.id}
                </Typography>
                <CardMedia
                  component="img"
                  height="210"
                  sx={{ width: "auto", margin: "0 auto", mt: "1rem" }}
                  image={pokemon.image}
                  alt={pokemon.name}
                />
                <CardContent>
                  <Typography
                    variant="h2"
                    textAlign={"center"}
                    fontWeight={"bolder"}
                  >
                    {pokemon.name}
                  </Typography>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 4, sm: 5, md: 6 }}
                    justifyContent={"center"}
                  >
                    <Grid item sm={6} justifyContent={"center"}>
                      <Typography textAlign={"center"} fontSize={"1.7rem"}>
                        {pokemon.size} Kg <br></br>{" "}
                        <span style={{ fontSize: "1.2rem", color: "#272727" }}>
                          Weight
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item sm={6} justifyContent={"center"}>
                      <Typography textAlign={"center"} fontSize={"1.7rem"}>
                        {pokemon.height} m <br></br>{" "}
                        <span style={{ fontSize: "1.2rem", color: "#2c2a27" }}>
                          Height
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h4" textAlign={"center"} sx={{ mt: 3 }}>
                    Habilities
                  </Typography>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 4, sm: 5, md: 6 }}
                    justifyContent={"center"}
                  >
                    {pokemon.habilitis.map((hability) => (
                      <Grid item sm={12}>
                        <Typography textAlign={"center"} fontSize={"1.7rem"}>
                          {hability.habilitiName}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant="h4" textAlign={"center"} sx={{ mt: 3 }}>
                    Estatísticas básicas
                  </Typography>
                  <Stack
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"100%"}
                    mt={2}
                  >
                    {pokemon.stats.map((stat) => (
                      <Box key={stat.statName} sx={{ mb: 2 }} width={"70%"}>
                        <Typography variant="body1">
                          {stat.statName}: {stat.strength}
                        </Typography>
                        <Slider
                          value={stat.strength}
                          min={0}
                          max={270}
                          sx={{
                            pointerEvents: "none",
                            "& .MuiSlider-thumb": {
                              width: "0px",
                              height: "0px",
                            },
                            "& .MuiSlider-rail": {
                              height: "10px",
                              backgroundColor: "white",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </CardActionArea>
              <LikeIcon pokemon={pokemon} />
            </Card>
          ) : (
            <Typography>Pokemon não encotrado</Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

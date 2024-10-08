import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { LikeIcon } from "../components/LikeIcon";
import { useAppSelector } from "../store/hook";
import { Navbar } from "../components/Navbar";
import { useTheme } from "styled-components";
import { listPokedex } from "../store/modules/pokedex/pokedexSlice";

export function Pokedex() {
  const pokedex = useAppSelector((state) => listPokedex(state.pokemons));
  console.log(pokedex);

  if (!pokedex) {
    return <div>Loading...</div>;
  }

  const navigate = useNavigate();
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
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
            justifyContent={"center"}
            paddingTop={"20px"}
          >
            {pokedex.length > 0 ? (
              pokedex.map((pokemon) => (
                <Grid
                  item
                  sm={6}
                  md={4}
                  lg={3}
                  key={pokemon.id} // Adicionando a key única aqui
                  width={"18rem"}
                >
                  <Card sx={{ minWidth: "80%" }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        sx={{ width: "auto", margin: "0 auto", mt: "1rem" }}
                        image={pokemon.image}
                        alt={pokemon.name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          textAlign={"center"}
                          fontWeight={"bolder"}
                        >
                          {pokemon.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Size: {pokemon.size} kg
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <LikeIcon pokemon={pokemon} />
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography fontSize={"1.5rem"} textAlign={"center"}>
                Você não tem nenhum Pokemon favorito,<br></br> mas{" "}
                <Link
                  onClick={() => navigate("/pokemon")}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "#fc6e6e",
                    "&:hover": {
                      color: "#000000",
                    },
                  }}
                >
                  clique aqui
                </Link>{" "}
                para ir até a página e adicionar.
              </Typography>
            )}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
